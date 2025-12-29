<?php

namespace App\Traits;

trait SanitizesHtml
{
    protected function sanitize($html)
    {
        // Allow only safe tags (p, b, i, u, h1-h6, ul, ol, li, a, img, blockquote)
        $allowedTags = '<p><br><b><strong><i><em><u><h1><h2><h3><h4><h5><h6><ul><ol><li><a><img><blockquote>';
        
        return strip_tags($html, $allowedTags);
    }
}