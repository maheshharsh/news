<?php

namespace App\Filament\Resources\CommoditiesResource\Pages;

use App\Filament\Resources\CommoditiesResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListCommodities extends ListRecords
{
    protected static string $resource = CommoditiesResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
