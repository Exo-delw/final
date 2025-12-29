<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreInquiryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; 
    }

    public function rules(): array
    {
        $emailRules = app()->runningUnitTests() 
        ? 'required|email|max:100'
        : 'required|email:dns|max:100';
        return [
            'fullname' => 'required|string|max:100', 
            'email' => 'required|email|max:100',
            'phone_number' => 'required|string|max:20', 
            'subject' => 'required|string|max:200',
            'message' => 'required|string|max:5000',
        ];
    }

    protected function prepareForValidation()
    {
        // If frontend sends 'fullname', map it to 'full_name' for the DB later
        // But for validation rules above, we check 'fullname'
    }
}