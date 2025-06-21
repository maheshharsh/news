   import React from 'react';
   import { Link, Head } from '@inertiajs/react';

   interface Article {
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
       <div className="min-h-screen">
         <Head title="News Portal" />
         <div className="container mx-auto p-4">
           <h1 className="text-3xl text-center font-bold mb-4 border rounded-full text-white bg-blue-600">
             Latest News
           </h1>
           <p className="text-lg text-green-500">Debug: {articles.length} articles found</p>
           {articles.length === 0 && <p className="text-gray-300">No articles available.</p>}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {articles.map((article) => (
               <div key={article.id} className="border rounded-lg p-4 bg-white">
                 {article.image && (
                   <img
                     src={`/storage/${article.image}`}
                     alt={article.title}
                     className="w-full h-48 object-cover mb-2"
                   />
                 )}
                 <h2 className="text-xl font-semibold">{article.title}</h2>
                 <p className="text-gray-600">{article.category.name}</p>
                 <div className="container bg-red-600">
                    <p>ram</p>
                 </div>
                 <p className="mt-2">{article.content.substring(0, 100)}...</p>
                 <Link
                   href={`/articles/${article.slug}`}
                   className="text-blue-500 hover:underline"
                 >
                   Read More
                 </Link>
               </div>
             ))}
           </div>
         </div>
       </div>
     );
   };

   export default Index;
