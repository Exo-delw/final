<?php

namespace Tests\Feature\Api\V1;

use App\Models\User;
use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class ContentTest extends TestCase
{
    use RefreshDatabase;

    // REMOVED setUp() logic to prevent forcing login on every test

    public function test_admin_can_create_service_with_auto_slug()
    {
        // 1. Login as Admin manually here
        Sanctum::actingAs(User::factory()->create());

        $response = $this->postJson('/api/v1/admin/services', [
            'title' => 'Global Logistics',
            'short_description' => 'We move things.',
            'content' => '<p>Details...</p>'
        ]);

        $response->assertStatus(201);
        
        $this->assertDatabaseHas('services', [
            'title' => 'Global Logistics',
            'slug' => 'global-logistics'
        ]);
    }

    public function test_admin_can_upload_blog_thumbnail()
    {
        // 1. Login as Admin
        Sanctum::actingAs(User::factory()->create());
        
        Storage::fake('public'); 
        $file = UploadedFile::fake()->image('blog.jpg');

        $response = $this->postJson('/api/v1/admin/posts', [
            'title' => 'My New Post',
            'content' => 'Content',
            'thumbnail' => $file
        ]);

        $response->assertStatus(201);
        $this->assertNotNull($response->json('data.thumbnail'));
    }

    public function test_blog_content_is_sanitized_against_xss()
    {
        // 1. Login as Admin
        Sanctum::actingAs(User::factory()->create());

        $maliciousContent = "<h1>Hello</h1><script>alert('Hacked')</script><p>World</p>";

        $response = $this->postJson('/api/v1/admin/posts', [
            'title' => 'Hacked Post',
            'content' => $maliciousContent,
            'is_published' => true
        ]);

        $response->assertStatus(201);

        // <script> should be removed
        $this->assertDatabaseHas('posts', [
            'title' => 'Hacked Post',
            'content' => '<h1>Hello</h1>alert(\'Hacked\')<p>World</p>'
        ]);
    }

    public function test_public_cannot_see_draft_posts()
    {
        // 1. DO NOT LOGIN (We want to be a guest)
        
        Post::create(['title' => 'Draft', 'slug' => 'draft', 'content' => 'x', 'is_published' => false]);
        Post::create(['title' => 'Live', 'slug' => 'live', 'content' => 'x', 'is_published' => true]);

        $response = $this->getJson('/api/v1/posts');

        $response->assertJsonCount(1, 'data') 
                 ->assertJsonFragment(['slug' => 'live'])
                 ->assertJsonMissing(['slug' => 'draft']);
    }
}