import React from "react";

interface AdvertisementProps {
    firstImage?: string;
    secondImage?: string;
}

function Advertisement({
    firstImage,
    secondImage,
}: AdvertisementProps) {
    return (
        <div className="bg-slate-100 h-full py-10 px-4 text-white font-bold text-center">
            <h2 className="mt-10 text-2xl text-black">Advertisements</h2>

            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                    src={firstImage}
                    alt="Advertisement 1"
                    className="mt-7 w-full h-96 object-cover"
                />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                    src={secondImage}
                    alt="Advertisement 4"
                    className="mt-7 w-full h-96 object-cover"
                />
            </div>
        </div>
    );
}

export default Advertisement;
