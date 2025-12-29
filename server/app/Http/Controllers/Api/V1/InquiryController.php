<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Inquiry;
use App\Http\Requests\StoreInquiryRequest;
use Illuminate\Http\JsonResponse;
use App\Http\Resources\InquiryResource;
 
// use Illuminate\Support\Facades\Mail; // Uncomment when you set up Mail

class InquiryController extends Controller
{
    /**
     * Store a new contact message.
     */
    public function store(StoreInquiryRequest $request): JsonResponse
    {
        $data = $request->validated();

        $dbData = [
            'full_name' => $data['fullname'],
            'email' => $data['email'],
            'phone_number' => $data['phone_number'],
            'subject' => $data['subject'],
            'message' => $data['message'],
        ];

        $inquiry = Inquiry::create($dbData);

        // 2. TODO: Send Email to Admin
        // Mail::to(config('mail.from.address'))->send(new ContactFormSubmitted($inquiry));

        return response()->json([
            'message' => 'Message received. We will get back to you shortly.',
            'data' => new InquiryResource($inquiry)
        ], 201);
    }

   

    /**
     * Admin: View all messages.
     */
    public function index() // Remove : JsonResponse type hint if it conflicts, or change it
    {
        // Fetch paginated results
        $messages = Inquiry::latest()->paginate(20);

        // WRAP with Resource to transform 'full_name' -> 'fullname'
        return InquiryResource::collection($messages);
    }

    // public function index(): AnonymousResourceCollection
    // {
    //     return InquiryResource::collection(Inquiry::all());
    // }
}