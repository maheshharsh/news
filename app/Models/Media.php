<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Auth;

class Media extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'file_name',
        'mime_type',
        'path',
        'disk',
        'size',
        'user_id',
        'article_id',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($media) {
            // Set the path to the storage directory
            $media->path = 'articles'; // Matches the directory in FileUpload
            $media->disk = 'public'; // Matches the disk in FileUpload
            $media->user_id = Auth::id(); // Set the current user as the uploader
        });

        static::saving(function ($media) {
            // Update mime_type and size if not set
            if ($media->file_name && !$media->mime_type) {
                $filePath = storage_path('app/public/articles/' . $media->file_name);
                if (file_exists($filePath)) {
                    $media->mime_type = mime_content_type($filePath);
                    $media->size = filesize($filePath);
                }
            }
        });
    }

    public function article(): BelongsTo
    {
        return $this->belongsTo(Article::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getUrlAttribute()
    {
        return asset('storage/' . $this->path . '/' . $this->file_name);
    }
}