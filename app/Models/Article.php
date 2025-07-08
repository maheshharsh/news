<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Article extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'content',
        'featured_image',
        'category_id',
        'user_id',
        'published_at',
        'is_featured',
        'is_published',
        'meta_title',
        'meta_description',
        'is_carousel'
    ];

    protected $casts = [
        'published_at' => 'datetime',
        'is_featured' => 'boolean',
        'is_carousel' => 'boolean',
        'is_published' => 'boolean',
    ];

    protected $appends = ['category_name', 'image'];

    /**
     * Get the category name attribute.
     *
     * @return string|null
     */
    public function getCategoryNameAttribute()
    {
        return $this->category_id ? $this->category->name : null;
    }


    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function media(): HasMany
    {
        return $this->hasMany(Media::class, 'article_id');
    }

    /**
     * Get the featured image URL with storage path.
     *
     * @param  string|null  $value
     * @return string|null
     */
    public function getImageAttribute($value): ?string
    {
        return $this->featured_image ? asset('/storage/' . $this->featured_image) : null;
    }

    public function getPublishedAtAttribute($value): ?string
    {
        return $value ? date("d M Y", strtotime($value)) : null;
    }
}
