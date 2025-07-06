import React, { useState, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import AppLayout from "../layouts/AppLayout";
import CommodityCard from "../components/CommodityCard";
import NewsCarousel from "../components/Carousel";
import NewsHeadlines from "../components/NewsHeadlines";
import NewsBlock from "../components/NewsBlock";
import FeaturedNews from "../components/FeaturedNews";
import { Article, HeadlinesProps } from "../components/news/type";
import sanitizeHtml from "sanitize-html";

interface Props {
    articles: Article[];
    headlines: HeadlinesProps[];
}

export default function Home({ articles, headlines }: Props) {
    const [prices, setPrices] = useState({
        gold: 0,
        silver: 0,
        crudeOil: 0,
        lastUpdated: "",
    });

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const mockPrices = {
                    gold: Math.random() * 10 + 50,
                    silver: Math.random() * 0.5 + 0.7,
                    crudeOil: Math.random() * 10 + 70,
                    lastUpdated: new Date().toLocaleTimeString(),
                };
                setPrices(mockPrices);
            } catch (error) {
                setPrices({
                    gold: 58.32,
                    silver: 0.72,
                    crudeOil: 78.45,
                    lastUpdated: new Date().toLocaleTimeString(),
                });
            }
        };

        fetchPrices();
        const interval = setInterval(fetchPrices, 300000);
        return () => clearInterval(interval);
    }, []);

    // Sanitize HTML content for safe rendering
    const sanitizeContent = (content: string) =>
        sanitizeHtml(content, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat([
                "img",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "ul",
                "ol",
                "li",
                "a",
                "p",
                "b",
                "i",
                "strong",
                "em",
            ]),
            allowedAttributes: {
                a: ["href", "target", "rel"],
                img: ["src", "alt", "width", "height"],
            },
        });

    // Filter carousel articles with fallback
    const carouselArticles = articles.filter((article) => article.is_carousel).length
        ? articles.filter((article) => article.is_carousel)
        : articles.slice(0, 3);

    // Get unique categories
    const uniqueCategories = Array.from(
        new Set(articles.map((article) => article.category.name).filter(Boolean))
    );

    return (
        <AppLayout currentRoute="/">
            <Head title="News Portal" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
                <CommodityCard
                    icon={<span>💰</span>}
                    name="Gold (24K)"
                    value={prices.gold}
                    unit="/g"
                    color="yellow"
                />
                <CommodityCard
                    icon={<span>🥈</span>}
                    name="Silver"
                    value={prices.silver}
                    unit="/g"
                    color="gray"
                />
                <CommodityCard
                    icon={<span>🛢️</span>}
                    name="Crude Oil"
                    value={prices.crudeOil}
                    unit="/barrel"
                    color="blue"
                />
            </div>

            <div>
                {/* Carousel Section */}
                <section>
                    <h1 className="text-3xl font-bold mb-4">Latest News</h1>
                    {carouselArticles.length > 0 ? (
                        <NewsCarousel
                            items={carouselArticles.map((article, index) => (
                                <Link
                                    key={index}
                                    href={`/articles/${article.id}`}
                                    className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden block"
                                >
                                    {/* Featured Image */}
                                    {article.featured_image && (
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src =
                                                    "https://via.placeholder.com/800x400?text=News+Image";
                                            }}
                                        />
                                    )}
                                    {/* Overlay for Text */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                                        <h2 className="text-2xl font-bold mb-2">
                                            {article.title}
                                        </h2>
                                        <div
                                            className="text-sm line-clamp-3"
                                            dangerouslySetInnerHTML={{
                                                __html: sanitizeContent(
                                                    article.content
                                                ),
                                            }}
                                        />
                                    </div>
                                </Link>
                            ))}
                            autoPlay={true}
                            interval={3000}
                            showControls={true}
                            showIndicators={true}
                        />
                    ) : (
                        <p className="text-gray-500">
                            No carousel articles available.
                        </p>
                    )}
                </section>
                <NewsHeadlines headlines={headlines} />
                <FeaturedNews
                    articles={articles.filter((article) => article.is_featured)}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {uniqueCategories.length > 0 ? (
                        uniqueCategories.map((category, index) => (
                            <NewsBlock
                                key={index}
                                title={`${category} News`}
                                category={category.toLowerCase()}
                                articles={articles
                                    .filter((a) => a.category.name === category)
                                    .slice(0, 4)}
                            />
                        ))
                    ) : (
                        <p className="text-gray-500">
                            No categories available.
                        </p>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}