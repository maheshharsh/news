<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MediaResource\Pages;
use App\Models\Media;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;

class MediaResource extends Resource
{
    protected static ?string $model = Media::class;

    protected static ?string $navigationIcon = 'heroicon-o-photo';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->required()
                    ->maxLength(255),

                FileUpload::make('file')
                    ->required()
                    ->directory('uploads')
                    ->disk('public')
                    ->preserveFilenames()
                    ->storeFileNamesIn('file_name')
                    ->getUploadedFileNameForStorageUsing(
                        fn(Forms\Get $get): string => $get('file_name') ?? ''
                    )
                    ->acceptedFileTypes(['image/*', 'application/pdf', 'video/*', 'audio/*'])
                    ->maxSize(20480)
                    ->afterStateUpdated(function ($state, Forms\Set $set) {
                        $set('path', 'uploads/' . $state->getClientOriginalName());
                    }),

                TextInput::make('mime_type')->label('MIME Type')->disabled(),

                TextInput::make('path')->disabled(),

                TextInput::make('disk')->default('public')->disabled(),

                TextInput::make('size')->disabled(),

                Select::make('user_id')
                    ->label('Uploaded By')
                    ->relationship('user', 'name')
                    ->searchable()
                    ->preload()
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('url')
                    ->label('Preview')
                    ->height(50)
                    ->circular(),

                TextColumn::make('name')->searchable()->sortable(),
                TextColumn::make('user.name')->label('Uploaded By')->searchable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListMedia::route('/'),
            'create' => Pages\CreateMedia::route('/create'),
            'edit' => Pages\EditMedia::route('/{record}/edit'),
            'view' => Pages\ViewMedia::route('/{record}'),
        ];
    }
}
