<?php

   namespace App\Http\Controllers;

   use App\Models\Article;
   use Inertia\Inertia;

   class ArticleController extends Controller
   {
       public function index()
       {
           $articles = Article::with('category')
           ->where('is_published', true)
           ->latest()
           ->get();
           
           return Inertia::render('Home', [
               'articles' => $articles,
           ]);
       }

       public function politicsIndex()
       {
           $politics = Article::with('category')
           ->where('is_published', true)
           ->latest()
           ->get();
           
           return Inertia::render('politics/Index', [
               'articles' => $politics,
           ]);
       }

       public function sportsIndex()
       {
           $politics = Article::with('category')
           ->where('is_published', true)
           ->latest()
           ->get();
           
           return Inertia::render('sports/Index', [
               'articles' => $politics,
           ]);
       }

       public function show($slug)
       {
           $article = Article::with('category')
               ->where('slug', $slug)
               ->where('is_published', true)
               ->firstOrFail();

           return Inertia::render('Show', [
               'article' => $article,
           ]);
       }


   }