<?php

use App\Http\Controllers\AdvertisementController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HeadlinesController;


// home page
Route::get('/', [ArticleController::class, 'home'])->name('articles.index');
Route::get('/articles/{id}', [ArticleController::class, 'show'])->name('articles.show');

Route::get('/headline/{id}', [HeadlinesController::class, 'show'])->name('headline.show');

// api
Route::get('/advertisements', [AdvertisementController::class, 'index']);
Route::get('/categories', [CategoryController::class, 'index']);

// slug redirect
Route::get('/{slug}', [ArticleController::class, 'category'])->name('articles.slug');

