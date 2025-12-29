<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Subscriber;
use App\Http\Requests\StoreSubscriberRequest;
use App\Http\Resources\SubscriberResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class SubscriberController extends Controller
{
    /**
     * Store a newly created subscriber.
     * Public Endpoint.
     */
    public function store(StoreSubscriberRequest $request): JsonResponse
    {
        // 1. Validation is already done by StoreSubscriberRequest
        // 2. Create the record
        $subscriber = Subscriber::create($request->validated());

        // 3. Return consistent JSON with 201 Created status
        return response()->json([
            'message' => 'Subscription successful.',
            'data' => new SubscriberResource($subscriber),
        ], 201);
    }

    /**
     * Display a listing of subscribers.
     * Admin Endpoint.
     */
    public function index(): AnonymousResourceCollection
    {
        $subscribers = Subscriber::latest()->paginate(20);

        return SubscriberResource::collection($subscribers);
    }
}