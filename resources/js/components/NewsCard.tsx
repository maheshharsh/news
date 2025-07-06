import { Link } from "@inertiajs/react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Clock } from "lucide-react";
import { Article } from "./news/type";

interface NewsCardProps {
    article: Article;
}

export default function NewsCard({ article }: NewsCardProps) {
    return (
        <Link  href={`/articles/${article.id}`}
        className="block">
            <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                    <img
                        src={
                            article.image
                                ? article.image
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
                            {/* Timestamp */}
                            <div className="flex items-center mt-3 text-xs sm:text-xs text-gray-200">
                                <Clock className="h-3 w-3 mr-1" />
                                {article.published_at}
                            </div>
                        </CardContent>
                    </div>
                </div>
            </Card>
        </Link>
    );
}