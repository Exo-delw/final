<?php

namespace Tests\Feature\Api\V1;

use App\Models\Subscriber;
use App\Models\Inquiry;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PublicFeatureTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_subscribe_successfully()
    {
        $response = $this->postJson('/api/v1/subscribe', [
            'email' => 'client@test.com'
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('subscribers', ['email' => 'client@test.com']);
    }

    public function test_user_cannot_subscribe_twice_same_email()
    {
        Subscriber::create(['email' => 'duplicate@test.com']);

        // Try again
        $response = $this->postJson('/api/v1/subscribe', [
            'email' => 'duplicate@test.com'
        ]);

        // Should be 422 Unprocessable Content
        $response->assertStatus(422)
                 ->assertJsonValidationErrors(['email']);
    }

    public function test_contact_form_saves_to_database()
    {
        $payload = [
            'name' => 'John Doe',
            'email' => 'john@doe.com',
            'subject' => 'Project Inquiry',
            'message' => 'I want to build a website.'
        ];

        $response = $this->postJson('/api/v1/contact', $payload);

        $response->assertStatus(201);
        $this->assertDatabaseHas('inquiries', ['email' => 'john@doe.com']);
    }
}