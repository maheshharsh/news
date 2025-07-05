<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Headline extends Model
{
    use SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'headlines';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'content',
        'featured_image',
        'category_id',
        'slug',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Define the relationship with the Category model.
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Boot the model to automatically generate a slug.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($headline) {
            if (empty($headline->slug)) {
                $headline->slug = Str::slug($headline->title);
                // Ensure slug is unique
                $originalSlug = $headline->slug;
                $count = 1;
                while (self::where('slug', $headline->slug)->exists()) {
                    $headline->slug = $originalSlug . '-' . $count++;
                }
            }
        });

        static::updating(function ($headline) {
            if ($headline->isDirty('title') && empty($headline->slug)) {
                $headline->slug = Str::slug($headline->title);
                // Ensure slug is unique
                $originalSlug = $headline->slug;
                $count = 1;
                while (self::where('slug', $headline->slug)->where('id', '!=', $headline->id)->exists()) {
                    $headline->slug = $originalSlug . '-' . $count++;
                }
            }
        });
    }

    /**
     * Get the featured image URL with storage path.
     */
    public function getFeaturedImageAttribute($value): ?string
    {
        return $value ? asset('storage/' . $value) : null;
    }
}