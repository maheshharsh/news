<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CommentResource\Pages;
use App\Models\Comment;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\IconColumn;

class CommentResource extends Resource
{
    protected static ?string $model = Comment::class;

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-left-ellipsis';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Textarea::make('content')
                    ->required()
                    ->label('Comment'),

                Select::make('article_id')
                    ->relationship('article', 'title')
                    ->searchable()
                    ->required(),

                Select::make('user_id')
                    ->label('User')
                    ->relationship('user', 'name')
                    ->searchable()
                    ->helperText('Leave blank if this is a guest comment'),

                TextInput::make('guest_name')
                    ->label('Guest Name')
                    ->maxLength(255)
                    ->visible(fn ($get) => !$get('user_id')),

                TextInput::make('guest_email')
                    ->label('Guest Email')
                    ->email()
                    ->maxLength(255)
                    ->visible(fn ($get) => !$get('user_id')),

                Toggle::make('is_approved')
                    ->label('Approved')
                    ->default(false),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('commenter_name')
                    ->label('Commenter')
                    ->searchable(),

                TextColumn::make('commenter_email')
                    ->label('Email')
                    ->searchable(),

                TextColumn::make('article.title')
                    ->label('Article')
                    ->limit(30)
                    ->searchable(),

                TextColumn::make('content')
                    ->label('Comment')
                    ->limit(50),

                IconColumn::make('is_approved')
                    ->boolean()
                    ->label('Approved'),
            ])
            ->filters([
                Tables\Filters\TernaryFilter::make('is_approved')
                    ->label('Approval Status'),
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
            'index' => Pages\ListComments::route('/'),
            'create' => Pages\CreateComment::route('/create'),
            'edit' => Pages\EditComment::route('/{record}/edit'),
            'view' => Pages\ViewComment::route('/{record}'),
        ];
    }
}
