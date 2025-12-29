<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
 

class Subscriber extends Model
{
    //
    use HasFactory;
    // Allow these fields to be filled via create()
    protected $fillable = ['email'];

    // Good practice: Cast dates to Carbon instances automatically
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
