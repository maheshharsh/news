import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import AppLayout from "../layouts/AppLayout";
import CommodityCards from "../components/CommodityCard";
import NewsCarousel from "../components/Carousel";
import NewsHeadlines from "../components/NewsHeadlines";
import NewsBlocks from "../components/NewsBlock";
import FeaturedNews from "../components/FeaturedNews";
import CommodityCard from "../components/CommodityCard";
import NewsBlock from "../components/NewsBlock";

interface Article {
    id: number;
    title: string;
    slug: string;
    content: string;
    category: { name: string };
    featured_image?: string;
    created_at: string;
}

interface Props {
    articles: Article[];
}

export default function Home({ articles }: Props) {
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

    const carouselItems = [
        {
            image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3",
            category: "BREAKING",
            title: "Global Summit Addresses Climate Change",
            content:
                "World leaders gather to discuss urgent climate action plans...",
        },
        {
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
            category: "TECHNOLOGY",
            title: "New AI Breakthrough Revolutionizes Healthcare",
            content:
                "Researchers develop AI that can predict diseases with 95% accuracy...",
        },
        {
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
            category: "SPORTS",
            title: "National Team Wins Championship After Decade",
            content:
                "Historic victory celebrated nationwide as underdogs take the title...",
        },
    ].map((item, index) => (
        <div key={index} className="h-96 relative overflow-hidden rounded-lg">
            <img
                src={`${item.image}?auto=format&fit=crop&w=800&h=400&q=80`}
                alt={item.category}
                className="w-full h-full object-cover absolute inset-0"
                onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/800x400?text=${item.category}+Image`;
                }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                <div className="text-white">
                    <span
                        className={`${
                            item.category === "BREAKING"
                                ? "bg-red-600"
                                : item.category === "TECHNOLOGY"
                                ? "bg-blue-600"
                                : "bg-green-600"
                        } text-xs font-semibold px-2 py-1 rounded`}
                    >
                        {item.category}
                    </span>
                    <h2 className="text-3xl font-bold mt-2">{item.title}</h2>
                    <p className="mt-2">{item.content}</p>
                </div>
            </div>
        </div>
    ));

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

                <section>
                    <h1 className="text-3xl font-bold mb-4">Latest News</h1>
                    <NewsCarousel items={carouselItems} />
                </section>

                <NewsHeadlines />

                <div className="flex gap-2 mt-4">
                    <NewsBlock />
                    <NewsBlock />
                </div>

                <FeaturedNews articles={articles} />
            </div>
        </AppLayout>
    );
}
