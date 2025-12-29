<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreSubscriberRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Public endpoint, so allow everyone
    }

    public function rules(): array
    {
        // If testing, skip the slow/network-dependent DNS check
        $emailRules = app()->runningUnitTests() 
            ? 'required|email|max:255|unique:subscribers,email'
            : 'required|email:dns|max:255|unique:subscribers,email';

        return [
            'email' => $emailRules,
        ];
    }

    public function messages(): array
    {
        return [
            'email.unique' => 'You are already subscribed to our updates!',
            'email.email' => 'Please provide a valid email address.',
        ];
    }
}