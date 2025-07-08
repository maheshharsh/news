<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('article_media', function (Blueprint $table) {
            $table->id();
            $table->foreignId('article_id')->constrained()->cascadeOnDelete();
            $table->foreignId('media_id')->constrained()->cascadeOnDelete();
            $table->unsignedInteger('order')->default(0);
            $table->boolean('is_featured')->default(false);
            $table->timestamps();
        });
        Schema::table('articles', function (Blueprint $table) {
            $table->dropColumn('featured_image');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('article_media');
        Schema::table('articles', function (Blueprint $table) {
            $table->string('featured_image')->nullable(); // adjust type if needed
        });
    }
};