<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddTagRequest;
use App\Http\Requests\UpdateTagRequest;
use App\Http\Resources\TagResource;
use App\Models\Tag;
use Illuminate\Support\Facades\Auth;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return TagResource::collection(Auth::user()->cashAccounts);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AddTagRequest $request)
    {
        $tag = Tag::create($request->validated());

        return TagResource::make($tag);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTagRequest $request, Tag $tag)
    {
        $tag->update($request->validated());

        return TagResource::make($tag);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tag $tag)
    {
        $tag->delete();
    }
}
