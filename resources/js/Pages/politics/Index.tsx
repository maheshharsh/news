// src/Pages/Index.tsx

import React, { ReactNode, useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/react";
import NewsHeadlines from "../../components/NewsHeadlines";
import NewsBlock from "../../components/NewsBlock";
import AppLayout from "../../layouts/AppLayout";

interface Article {
    created_at: ReactNode;
    id: number;
    title: string;
    slug: string;
    content: string;
    category: { name: string };
    image?: string;
}

interface Props {
    articles: Article[];
}

const Index: React.FC<Props> = ({ articles }) => {
    return (
        <AppLayout currentRoute="/politics">
            <Head title="Politics" />
            <h1 className="font-bold text-4xl px-4 py-5">Politics</h1>
            <div className="">
                <NewsHeadlines />
                <NewsBlock 
                        title="Political Developments" 
                        category="politics" 
                        articles={articles.filter(a => a.category.name === 'Politics')}
                    />            </div>
            {/* <FeaturedNews articles={articles} /> */}
        </AppLayout>
    );
};

export default Index;
