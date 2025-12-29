<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreServiceRequest extends FormRequest
{
    public function authorize(): bool
    {
        // In production, check if user is admin: return $this->user()->isAdmin();
        return true; 
    }

    public function rules(): array
    {
        $rules = [
            'title' => 'required|string|max:200',
            'short_description' => 'required|string|max:500',
            'content' => 'nullable|string', // Full HTML content
            'icon' => 'nullable|string|max:50', // e.g. "Truck"
            // 'icon' => 'nullable|image|max:2048'
            'gallery' => 'nullable|array',
            'gallery.*' => 'image|max:2048',
        ];

        // Unique Slug Logic
        if ($this->isMethod('POST')) {
            // Create: Slug must be unique in services table
            $rules['slug'] = 'nullable|string|max:200|unique:services,slug';
        } else {
            // Update: Slug must be unique, but ignore the current service's ID
            $rules['slug'] = [
                'nullable', 
                'string', 
                'max:200', 
                Rule::unique('services', 'slug')->ignore($this->service)
            ];
        }

        return $rules;
    }
}