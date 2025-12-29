<?php

namespace Tests\Feature\Api\V1;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use RefreshDatabase; // Resets DB after every test

    public function test_admin_can_login_with_correct_credentials()
    {
        // 1. Arrange: Create a user
        $user = User::factory()->create([
            'email' => 'admin@stenar.com',
            'password' => bcrypt('password123'),
        ]);

        // 2. Act: Attempt login
        $response = $this->postJson('/api/v1/login', [
            'email' => 'admin@stenar.com',
            'password' => 'password123',
        ]);

        // 3. Assert: Check structure
        $response->assertStatus(200)
                 ->assertJsonStructure(['access_token', 'token_type']);
    }

    public function test_login_fails_with_wrong_password()
    {
        $user = User::factory()->create(['password' => bcrypt('correct')]);

        $response = $this->postJson('/api/v1/login', [
            'email' => $user->email,
            'password' => 'wrong',
        ]);

        $response->assertStatus(401);
    }

    public function test_guest_cannot_access_protected_routes()
    {
        // Try to access subscribers list without token
        $response = $this->getJson('/api/v1/admin/subscribers');

        // Should return 401 Unauthorized
        $response->assertStatus(401); 
    }
}