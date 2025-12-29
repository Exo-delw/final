<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SubscriberResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'email' => $this->email,
            // Format date specifically for the frontend table
            'subscribed_at' => $this->created_at->toIso8601String(),
            'human_date' => $this->created_at->diffForHumans(),
        ];
    }
}