<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;

// Route::get('/', function () {
//     return inertia('Home');
// });




Route::get('/', [ArticleController::class, 'index'])->name('articles.index');
Route::get('/articles/{slug}', [ArticleController::class, 'show'])->name('articles.show');
Route::get('/politics', [ArticleController::class, 'politicsIndex'])->name('politics.index');
Route::get('/sports', [ArticleController::class, 'sportsIndex'])->name('sports.index');