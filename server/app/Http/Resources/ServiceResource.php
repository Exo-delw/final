<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'short_description' => $this->short_description,
            'content' => $this->content, // The full HTML details
            'icon' => $this->icon,
            'icon' => $this->icon ? url($this->icon) : null,
            'gallery' => collect($this->gallery ?? [])->map(fn($path) => url($path)),
            // 'link' => route('services.show', $this->slug), // Optional helper
            'updated_at' => $this->updated_at->toIso8601String(),
        ];
    }
}