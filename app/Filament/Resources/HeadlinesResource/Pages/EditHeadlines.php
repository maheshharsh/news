<?php

namespace App\Filament\Resources\HeadlinesResource\Pages;

use App\Filament\Resources\HeadlineResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditHeadlines extends EditRecord
{
    protected static string $resource = HeadlineResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
