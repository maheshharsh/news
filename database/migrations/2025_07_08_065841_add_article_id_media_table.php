<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('media', function (Blueprint $table) {
            $table->foreignId('article_id')
                  ->constrained('articles')
                  ->onDelete('cascade')
                  ->nullable(false);
        });
        Schema::table('articles', function (Blueprint $table) {
            $table->dropColumn('featured_image');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('media', function (Blueprint $table) {
            $table->dropForeign(['article_id']);
            $table->dropColumn('article_id');
        });
        Schema::table('articles', function (Blueprint $table) {
            $table->string('featured_image')->nullable(); // adjust type if needed
        });
    }
};