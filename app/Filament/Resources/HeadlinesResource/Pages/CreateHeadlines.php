<?php

namespace App\Filament\Resources\HeadlinesResource\Pages;

use App\Filament\Resources\HeadlineResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateHeadlines extends CreateRecord
{
    protected static string $resource = HeadlineResource::class;
}
