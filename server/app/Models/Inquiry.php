<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inquiry extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',   
        'email', 
        'phone_number', 
        'subject', 
        'message', 
        'is_read'
    ];
    
    protected $casts = [
        'is_read' => 'boolean',
        'created_at' => 'datetime',
    ];
}