<?php

namespace App\Filament\Resources\ArticleResource\Pages;

use App\Filament\Resources\ArticleResource;
use App\Models\Media;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditArticle extends EditRecord
{
    protected static string $resource = ArticleResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }

    protected function afterSave(): void
    {
        $images = $this->form->getState()['featured_images'] ?? [];

        $this->record->media()->delete();

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
