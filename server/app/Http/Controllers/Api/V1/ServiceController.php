<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Http\Requests\StoreServiceRequest;
use App\Http\Resources\ServiceResource;
use App\Traits\GeneratesSlug; // <--- Import Trait
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ServiceController extends Controller
{
    use GeneratesSlug; // <--- Use Trait

    /**
     * Public: List all services
     */
    public function index(): AnonymousResourceCollection
    {
        return ServiceResource::collection(Service::all());
    }

    /**
     * Public: Get single service details
     */
    public function show(Service $service): ServiceResource
    {
        // Automatically found by 'slug' because of getRouteKeyName() in Model
        return new ServiceResource($service);
    }

    /**
     * Admin: Create Service
     */
    public function store(StoreServiceRequest $request): JsonResponse
    {
        $data = $request->validated();
        
        // Auto-generate slug if empty, or clean the provided one
        $data['slug'] = $this->generateSlug($data['title'], $request->slug ?? null);

        // if ($request->hasFile('icon')) {
        //     $data['icon'] = $this->uploadFile($request->file('icon'), 'services/icons');
        // }

        if ($request->hasFile('gallery')) {
            $galleryPaths = [];
            foreach ($request->file('gallery') as $file) {
                $galleryPaths[] = $this->uploadFile($file, 'services/gallery');
            }
            $data['gallery'] = $galleryPaths;
        }
        

        $service = Service::create($data);

        return response()->json([
            'message' => 'Service created successfully.',
            'data' => new ServiceResource($service)
        ], 201);
    }

    /**
     * Admin: Update Service
     */
    public function update(StoreServiceRequest $request, Service $service): JsonResponse
    {
        $data = $request->validated();

        // Update slug only if changed
        if ($request->has('slug') || $request->title !== $service->title) {
             $data['slug'] = $this->generateSlug($data['title'], $request->slug ?? null);
        }

        $service->update($data);

        return response()->json([
            'message' => 'Service updated successfully.',
            'data' => new ServiceResource($service)
        ]);
    }

    /**
     * Admin: Delete Service
     */
    public function destroy(Service $service): JsonResponse
    {
        $service->delete();
        return response()->json(['message' => 'Service deleted successfully.']);
    }
}