<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InquiryResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            
            // MAP: Frontend 'fullname' <--- Database 'full_name'
            'fullname' => $this->full_name, 
            
            'email' => $this->email,
            'phone_number' => $this->phone_number,
            'subject' => $this->subject,
            'message' => $this->message,
            
            // Professional extras
            'is_read' => (boolean) $this->is_read,
            'created_at' => $this->created_at->toIso8601String(),
            'human_date' => $this->created_at->diffForHumans(),
        ];
    }
}