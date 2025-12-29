<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Resources\PostResource;
use App\Traits\GeneratesSlug;
use App\Traits\UploadsFiles;
use App\Traits\SanitizesHtml;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PostController extends Controller
{
    use GeneratesSlug, UploadsFiles, SanitizesHtml;

    /**
     * Public: Get latest Published posts
     */
    public function index(): AnonymousResourceCollection
    {
        // Only show published posts to public (unless admin param passed)
        $query = Post::with('author') 
                     ->where('is_published', true)
                     ->latest();
        if (request()->has('category')) {
        $query->where('category', request('category'));
        }

        // Filter: Featured (Trending)
        if (request()->has('featured')) {
            $query->where('is_featured', true);
        }

        // Allow limit for "Recent Posts" widget (e.g., ?limit=3)
        if (request()->has('limit')) {
            return PostResource::collection($query->take(request('limit'))->get());
        }

        return PostResource::collection($query->paginate(10));
    }

    /**
     * Admin: Get ALL posts (Drafts + Published)
     */
    public function adminIndex(): AnonymousResourceCollection
    {
        return PostResource::collection(Post::latest()->paginate(20));
    }

    /**
     * Public: Get Single Post
     */
    public function show(Post $post): PostResource
    {
        return new PostResource($post);
    }

    /**
     * Admin: Create Post
     */
    public function store(StorePostRequest $request): JsonResponse
    {
        $data = $request->validated();

        $data['user_id'] = $request->user()->id; // Assign current admin as author

        $data['slug'] = $this->generateSlug($data['title'], $request->slug ?? null);

        $data['content'] = $this->sanitize($data['content']);

        if ($request->hasFile('thumbnail')) {
            $data['thumbnail'] = $this->uploadFile($request->file('thumbnail'), 'posts/thumbnails');
        }

        if ($request->hasFile('gallery')) {
            $galleryPaths = [];
            foreach ($request->file('gallery') as $file) {
                $galleryPaths[] = $this->uploadFile($file, 'posts/gallery');
            }
            $data['gallery'] = $galleryPaths; // Eloquent casts this to JSON automatically
        }
        
        $post = Post::create($data);

        return response()->json([
            'message' => 'Post created successfully.',
            'data' => new PostResource($post)
        ], 201);
    }

    /**
     * Admin: Update Post
     */
    public function update(StorePostRequest $request, Post $post): JsonResponse
    {
        $data = $request->validated();

        // 1. Handle Slug
        if ($request->has('slug') || $request->title !== $post->title) {
            $data['slug'] = $this->generateSlug($data['title'], $request->slug ?? null);
        }

        // 2. Handle Content
        if (isset($data['content'])) {
            $data['content'] = $this->sanitize($data['content']);
        }

        // 3. Handle Image (Delete old one if new one uploaded)
        if ($request->hasFile('thumbnail')) {
            $this->deleteFile($post->thumbnail); // Delete old
            $data['thumbnail'] = $this->uploadFile($request->file('thumbnail'), 'posts');
        }

        $post->update($data);

        return response()->json([
            'message' => 'Post updated successfully.',
            'data' => new PostResource($post)
        ]);
    }

    /**
     * Admin: Delete Post
     */
    public function destroy(Post $post): JsonResponse
    {
        // Delete image file from storage
        $this->deleteFile($post->thumbnail);
        
        $post->delete();

        return response()->json(['message' => 'Post deleted successfully.']);
    }
}