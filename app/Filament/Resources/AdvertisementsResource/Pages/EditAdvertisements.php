<?php

namespace App\Filament\Resources\AdvertisementsResource\Pages;

use App\Filament\Resources\AdvertisementsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditAdvertisements extends EditRecord
{
    protected static string $resource = AdvertisementsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
