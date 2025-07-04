import { Article } from "../components/news/type";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Clock } from "lucide-react";

interface NewsCardProps {
    article: Article;
}

export default function NewsCard({ article }: NewsCardProps) {
    console.log(article);

    return (
        <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="relative">
                <img
                    src={
                        article.featured_image
                            ? `/storage/${article.featured_image}`
                            : "https://via.placeholder.com/800x400?text=News+Image"
                    }
                    alt={article.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                        e.currentTarget.src =
                            "https://via.placeholder.com/800x400?text=News+Image";
                    }}
                />
                <div className="absolute top-3 left-3">
                    <Badge variant="secondary">{article.category.name}</Badge>
                </div>
            </div>
            <CardContent className="p-4">
                <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.content.substring(0, 150)}
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.created_at}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
