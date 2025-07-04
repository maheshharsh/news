export interface Article {
    id: number;
    title: string;
    slug: string;
    content: string;
    category: { name: string };
    featured_image?: string;
    created_at: string;
}

export interface FeaturedNewsProps {
    articles: Article[];
}

export interface NewsCardProps {
    article: Article;
}