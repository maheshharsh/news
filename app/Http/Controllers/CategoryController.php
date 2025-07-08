<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{
    public function index(): JsonResponse
    {
        $category = Category::get();

        return response()->json([
            'data' => $category
        ]);
    }
}
