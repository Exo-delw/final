<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StorePostRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $rules = [
            'title' => 'required|string|max:200',
            'excerpt' => 'required|string|max:300',
            'content' => 'required|string',
            'category' => 'required|string|in:news,blog,update',
            'is_featured' => 'boolean',
            'is_published' => 'boolean',
            // Image validation: Optional on update, max 2MB
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'gallery' => 'nullable|array',
            'gallery.*' => 'image|mimes:jpeg,png,jpg,webp|max:2048',
        ];

        // Slug Uniqueness Logic
        if ($this->isMethod('POST')) {
            $rules['slug'] = 'nullable|string|max:200|unique:posts,slug';
        } else {
            $rules['slug'] = [
                'nullable', 
                'string', 
                'max:200', 
                Rule::unique('posts', 'slug')->ignore($this->post)
            ];
        }

        return $rules;
    }
}