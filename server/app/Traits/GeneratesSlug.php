<?php

namespace App\Traits;

use Illuminate\Support\Str;

trait GeneratesSlug
{
    protected function generateSlug($title, $existingSlug = null)
    {
        // 1. If admin provided a slug, clean it.
        if ($existingSlug) {
            return Str::slug($existingSlug);
        }

        // 2. Otherwise, generate from title.
        return Str::slug($title);
    }
}