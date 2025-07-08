<?php

namespace App\Filament\Resources\ArticleResource\Pages;

use App\Filament\Resources\ArticleResource;
use App\Models\Media;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateArticle extends CreateRecord
{
    protected static string $resource = ArticleResource::class;

    protected function afterCreate(): void
    {
        $images = $this->form->getState()['featured_images'] ?? [];

        foreach ($images as $file) {
            Media::create([
                'article_id' => $this->record->id,
                'name' => basename($file),
                'file_name' => basename($file),
                'path' => $file,
                'user_id' => auth()->user()->id
            ]);
        }
    }
}
