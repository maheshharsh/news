import { Article } from "../components/news/type";
import NewsCard from "./NewsCard";

interface FeaturedNewsProps {
  articles: Article[];
}

export default function FeaturedNews({ articles }: FeaturedNewsProps) {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b">
        Featured News
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}