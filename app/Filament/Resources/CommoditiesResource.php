<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CommoditiesResource\Pages;
use App\Filament\Resources\CommoditiesResource\RelationManagers;
use App\Models\Commodities;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CommoditiesResource extends Resource
{
    protected static ?string $model = Commodities::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Market Data'; // Optional: Group in navigation

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->required()
                    ->maxLength(255)
                    ->label('Commodity Name'),
                Forms\Components\TextInput::make('price')
                    ->required()
                    ->numeric()
                    ->prefix('$')
                    ->label('Price')
                    ->step(0.01), // Allows decimal input
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable()
                    ->label('Commodity Name'),
                Tables\Columns\TextColumn::make('price')
                    ->money('usd')
                    ->sortable()
                    ->label('Price'),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->label('Created At'),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->label('Updated At'),
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(), // Filter for soft-deleted records
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
                Tables\Actions\RestoreAction::make(), // Restore soft-deleted records
                Tables\Actions\ForceDeleteAction::make(), // Permanently delete
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\RestoreBulkAction::make(),
                    Tables\Actions\ForceDeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getRelations(): array
    {
        return [
            // Add relation managers if needed, e.g., for related models
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCommodities::route('/'),
            'create' => Pages\CreateCommodities::route('/create'),
            'edit' => Pages\EditCommodities::route('/{record}/edit'),
            'view' => Pages\ViewCommodities::route('/{record}'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()->withTrashed(); // Include soft-deleted records
    }
}