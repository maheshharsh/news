<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ArticleResource\Pages;
use App\Models\Article;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Filament\Forms\Components\{TextInput, Select, FileUpload, DateTimePicker, Toggle, RichEditor, TagsInput};
use Filament\Tables\Columns\{TextColumn, IconColumn, ImageColumn, TagsColumn};

class ArticleResource extends Resource
{
    protected static ?string $model = Article::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->required()
                    ->maxLength(255),

                TextInput::make('slug')
                    ->required()
                    ->maxLength(255)
                    ->unique(ignoreRecord: true),

                Select::make('category_id')
                    ->relationship('category', 'name')
                    ->required(),

                Select::make('user_id')
                    ->label('User')
                    ->relationship('author', 'name')
                    ->required(),

                TextInput::make('excerpt')
                    ->maxLength(255),

                RichEditor::make('content')
                    ->required()
                    ->columnSpanFull(),

                // FileUpload::make('featured_image')
                //     ->image()
                //     ->directory('articles')
                //     ->disk('public')
                //     ->preserveFilenames(),

                FileUpload::make('featured_images')
                    ->multiple()
                    ->image()
                    ->directory('articles')
                    ->disk('public')
                    ->preserveFilenames()
                    ->relationship('media', 'file_name') // Links to the media relationship, storing file name in file_name column
                    ->enableReordering()
                    ->enableOpen()
                    ->enableDownload()
                    ->afterStateUpdated(function ($state, $set, $record) {
                        // Optional: Sync media records if needed
                        if ($record && $state) {
                            $record->media()->whereNotIn('file_name', $state)->delete();
                        }
                    }),

                DateTimePicker::make('published_at'),

                Toggle::make('is_featured')->label('Featured'),
                Toggle::make('is_published')->label('Published'),
                Toggle::make('is_carousel')->label('Carousel'),

                TextInput::make('meta_title')
                    ->maxLength(255),

                TextInput::make('meta_description')
                    ->maxLength(500),

                // This assumes tags are managed via pivot table
                Select::make('tags')
                    ->multiple()
                    ->relationship('tags', 'name')
                    ->searchable(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('featured_images')
                    ->label('Image')
                    ->disk('public')
                    ->getStateUsing(function ($record) {
                        // Return the first media file's file_name or null
                        return $record->media->first()?->file_name;
                    })
                    ->height(60),
    
                TextColumn::make('title')->searchable()->sortable(),
    
                TextColumn::make('author.name')
                    ->label('Author')
                    ->searchable(),
    
                TextColumn::make('category.name')
                    ->label('Category')
                    ->searchable(),
    
                IconColumn::make('is_featured')->boolean()->label('Featured'),
                IconColumn::make('is_published')->boolean()->label('Published'),
                IconColumn::make('is_carousel')->boolean()->label('Carousel'),
    
                TextColumn::make('published_at')
                    ->dateTime()
                    ->sortable(),
    
                TagsColumn::make('tags.name')->label('Tags'),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('category')->relationship('category', 'name'),
                Tables\Filters\Filter::make('featured')->query(fn (Builder $query) => $query->where('is_featured', true)),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }
    public static function getRelations(): array
    {
        return [
            // Add relation managers if needed
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListArticles::route('/'),
            'create' => Pages\CreateArticle::route('/create'),
            'edit' => Pages\EditArticle::route('/{record}/edit'),
            'view' => Pages\ViewArticle::route('/{record}'),
        ];
    }
}
