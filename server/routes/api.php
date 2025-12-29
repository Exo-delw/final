<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\SubscriberController;
use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\InquiryController;
use App\Http\Controllers\Api\V1\ServiceController;
use App\Http\Controllers\Api\V1\PostController;

Route::prefix('v1')->group(function () {
    
    // --- PUBLIC ENDPOINTS ---
    Route::post('/subscribe', [SubscriberController::class, 'store']);
    Route::post('/contact', [InquiryController::class, 'store']);
    Route::post('/login', [AuthController::class, 'login']);
    
    // Public Read-Only Content
    Route::get('/services', [ServiceController::class, 'index']);
    Route::get('/services/{service}', [ServiceController::class, 'show']);
    
    Route::get('/posts', [PostController::class, 'index']);
    Route::get('/posts/{post}', [PostController::class, 'show']);

    // --- PROTECTED ADMIN ENDPOINTS ---
    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/logout', [AuthController::class, 'logout']);
        
        // Admin Lists
        Route::get('/admin/subscribers', [SubscriberController::class, 'index']);
        Route::get('/admin/inquiries', [InquiryController::class, 'index']); // View messages
        Route::get('/admin/posts', [PostController::class, 'adminIndex']); // View drafts too
        
        // CRUD Operations
        Route::apiResource('admin/services', ServiceController::class)->except(['index', 'show']);
        Route::apiResource('admin/posts', PostController::class)->except(['index', 'show']);
    });

});