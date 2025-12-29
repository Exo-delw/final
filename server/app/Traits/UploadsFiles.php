<?php

namespace App\Traits;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

trait UploadsFiles
{
    public function uploadFile(UploadedFile $file, $folder = 'uploads')
    {
        // Generate unique name: timestamp_random.extension
        $filename = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
        
        // Store in storage/app/public/uploads
        $path = $file->storeAs($folder, $filename, 'public');

        // Return the path that can be saved to DB
        return '/storage/' . $path;
    }

    public function deleteFile($path)
    {
        if ($path) {
            // Convert URL back to relative path if needed, then delete
            $relativePath = str_replace('/storage/', '', $path);
            Storage::disk('public')->delete($relativePath);
        }
    }
}