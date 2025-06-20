<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use App\Models\User;
use Filament\Resources\Pages\EditRecord;

class EditUser extends EditRecord
{
    protected static string $resource = UserResource::class;

    protected function getHeaderActions(): array
    {
        $actions = [];

        if (User::count() > 1) {
            $actions[] = \Filament\Actions\DeleteAction::make();
        }

        return $actions;
    }

}
