<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('posts', function (Blueprint $table) {
        $table->id();
        
        // Content
        $table->string('title');
        $table->string('slug')->unique();
        $table->text('excerpt'); 
        $table->longText('content');
        $table->string('thumbnail')->nullable(); 
        $table->json('gallery')->nullable(); 
        // Metadata
        $table->string('category')->default('blog'); 
        $table->boolean('is_featured')->default(false); 
        $table->boolean('is_published')->default(false);
        
        // Relationships
        $table->foreignId('user_id')->constrained()->onDelete('cascade'); 
        
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
