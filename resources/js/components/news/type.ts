export interface Article {
    id: number;
    title: string;
    slug: string;
    content: string;
    category: { name: string };
    featured_image?: string;
    image?: string;
    is_featured?: boolean;
    is_carousel?: boolean;
    created_at: string;
    published_at: string;
    category_name: string;
}

export interface HeadlinesProps {
    id: number;
    title: string;
    content: string;
    category_name: string;
    slug: string;
    time?: string;
}

export interface FeaturedNewsProps {
    articles: Article[];
}

export interface NewsCardProps {
    article: Article;
}