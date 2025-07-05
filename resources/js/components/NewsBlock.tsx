import React from "react";

function NewsBlock({ title, category, articles }: { title?: any; category?: any; articles?: any }) {
    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="border-l-4 border-red-600 pl-3 mb-6">
                <h3 className="font-bold text-2xl md:text-3xl text-gray-800">
                    {title}
                </h3>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Featured News */}
                <div className="lg:w-1/2 relative group">
                    <div className="overflow-hidden rounded-lg shadow-md">
                        <img
                            src="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3"
                            alt="Bollywood news"
                            className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white">
                            <span className="bg-red-600 text-xs font-semibold px-2 py-1 rounded">
                                Latest
                            </span>
                            <h4 className="text-xl md:text-2xl font-bold mt-2 leading-tight">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </h4>
                            <p className="text-sm text-gray-300 mt-1">
                                2 hours ago
                            </p>
                        </div>
                    </div>
                </div>

                {/* News List */}
                <div className="lg:w-1/2 space-y-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div
                            key={item}
                            className="flex gap-4 pb-4 border-b border-gray-200 last:border-0 group"
                        >
                            <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded">
                                <img
                                    src={`https://picsum.photos/200/200?random=${item}`}
                                    alt="News thumbnail"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                />
                            </div>
                            <div>
                                <h5 className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </h5>
                                <p className="text-xs text-gray-500 mt-1">
                                    45 minutes ago
                                </p>
                                <span className="inline-block mt-2 text-xs font-medium px-2 py-1 bg-gray-100 rounded-full">
                                    #{item} trending
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewsBlock;
