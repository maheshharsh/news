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
        Schema::create('headlines', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255)->index();
            $table->text('content');
            $table->foreignId('category_id')->constrained()->onDelete('cascade');
            $table->string('slug')->unique()->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('headlines');
    }
};