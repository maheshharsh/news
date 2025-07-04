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
        <AppLayout currentRoute="/sports">
            <Head title="Sports" />
            
            <div className="">
                <NewsHeadlines />
                <NewsBlock />
            </div>
            {/* <FeaturedNews articles={articles} /> */}
        </AppLayout>
    );
};

export default Index;
