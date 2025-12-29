<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Stenar Admin',
            'email' => 'admin@stenar.com',
            'password' => Hash::make('password'), // Change this for production!
        ]);
    }
}