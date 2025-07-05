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
                    className="w-full h-64 sm:h-48 object-cover"
                    onError={(e) => {
                        e.currentTarget.src =
                            "https://via.placeholder.com/800x400?text=News+Image";
                    }}
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                    <CardContent className="p-4 text-white w-full">
                        {/* Category Badge */}
                        <div className="mb-2">
                            <Badge
                                variant="secondary"
                                className="bg-blue-200 text-blue-900"
                            >
                                {article.category.name}
                            </Badge>
                        </div>
                        {/* Title */}
                        <h4 className="font-bold text-lg sm:text-base line-clamp-2">
                            {article.title}
                        </h4>
                        {/* Content Snippet */}
                        <p className="text-sm sm:text-xs mt-2 line-clamp-3">
                            {article.content.substring(0, 100)}
                        </p>
                        {/* Timestamp */}
                        <div className="flex items-center mt-3 text-xs sm:text-xs text-gray-200">
                            <Clock className="h-3 w-3 mr-1" />
                            {article.created_at}
                        </div>
                    </CardContent>
                </div>
            </div>
        </Card>
    );
}