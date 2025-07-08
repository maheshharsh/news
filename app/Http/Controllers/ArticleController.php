<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Commodities;
use App\Models\Headline;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function home()
    {
        $articles = Article::with('category')
            ->where('is_published', true)
            ->latest()
            ->get();

        $headlines = Headline::with('category')
            ->latest()
            ->get();

        $commodities = Commodities::latest()
            ->get();

        return Inertia::render('Home', [
            'articles' => $articles,
            'headlines' => $headlines,
            'commodities' => $commodities,
        ]);
    }

    // public function politicsIndex()
    // {
    //     $politics = Article::with('category')
    //         ->where('is_published', true)
    //         ->latest()
    //         ->get();

    //     $headlines = Headline::with('category')
    //         ->whereHas('category', function ($query) {
    //             $query->where('slug', 'Politics'); 
    //         })
    //         ->latest()
    //         ->get();

    //     return Inertia::render('politics/Index', [
    //         'articles' => $politics,
    //         'headlines' => $headlines,
    //     ]);
    // }

    // public function sportsIndex()
    // {
    //     $politics = Article::with('category')
    //         ->where('is_published', true)
    //         ->latest()
    //         ->get();

    //     $headlines = Headline::with('category')
    //         ->whereHas('category', function ($query) {
    //             $query->where('slug', 'Sports'); 
    //         })
    //         ->latest()
    //         ->get();

    //     return Inertia::render('sports/Index', [
    //         'articles' => $politics,
    //         'headlines' => $headlines,
    //     ]);
    // }

    public function show(Request $request)
    {
        $article = Article::with('media')->findorFail($request->id);
        return Inertia::render('article/show', [
            'article' => $article,
        ]);
    }

    public function category(Request $request)
    {
        // Fetch articles filtered by category slug and is_published
        $articles = Article::with('category')
            ->where('is_published', true)
            ->whereHas('category', function ($query) use ($request) {
                $query->where('slug', $request->slug);
            })
            ->latest()
            ->get();

        // Fetch headlines filtered by category slug
        $headlines = Headline::with('category')
            ->whereHas('category', function ($query) use ($request) {
                $query->where('slug', $request->slug);
            })
            ->latest()
            ->get();

        return Inertia::render('category/Index', [
            'articles' => $articles,
            'headlines' => $headlines,
        ]);
    }
}
