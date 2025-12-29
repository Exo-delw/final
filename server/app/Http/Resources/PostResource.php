<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'category' => ucfirst($this->category), 
            'short_description' => $this->excerpt,
            'content' => $this->content,
            'author' => $this->author->name ?? 'Stenar Team',
            'thumbnail' => $this->thumbnail ? url($this->thumbnail) : null,
            'is_published' => $this->is_published,
            'created_at' => $this->created_at->format('M d, Y'),
            'human_date' => $this->created_at->diffForHumans(),
            'gallery' => collect($this->gallery ?? [])->map(fn($path) => url($path)),
            'is_featured' => $this->is_featured,
        ];
    }
}