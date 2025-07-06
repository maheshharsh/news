<?php

namespace App\Http\Controllers;

use App\Models\Headline;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HeadlinesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {    
        $headline = Headline::findOrFail($request->id);
        return Inertia::render('headlines/show', [
            'headlines' => $headline,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Headline $headlines)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Headline $headlines)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Headline $headlines)
    {
        //
    }
}
