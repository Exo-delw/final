<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 
        'slug', 
        'short_description', 
        'content', 
        'icon',
        'gallery'
    ];

    protected $casts = [
        'gallery' => 'array', // Auto-JSON conversion
        'created_at' => 'datetime',
    ];
    
    public function getRouteKeyName()
    {
        return 'slug';
    }
}