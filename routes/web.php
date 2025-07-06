<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\HeadlinesController;

// Route::get('/', function () {
//     return inertia('Home');
// });



// home page
Route::get('/', [ArticleController::class, 'home'])->name('articles.index');
Route::get('/articles/{id}', [ArticleController::class, 'show'])->name('articles.show');

Route::get('/politics', [ArticleController::class, 'politicsIndex'])->name('politics.index');

Route::get('/sports', [ArticleController::class, 'sportsIndex'])->name('sports.index');

Route::get('/headline/{id}', [HeadlinesController::class, 'show'])->name('headline.show');