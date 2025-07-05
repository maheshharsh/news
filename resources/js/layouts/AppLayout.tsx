import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Advertisement from "../components/Advertisment"; // Fixed typo in import path

interface MainLayoutProps {
    children: ReactNode;
    currentRoute: string;
}

export default function AppLayout({ children, currentRoute }: MainLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar currentRoute={currentRoute} />

            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
                {/* Left Advertisement - Hidden on mobile, fixed on desktop */}
                <div className="hidden lg:block lg:w-1/6 fixed left-0 top-0 bottom-0 z-40">
                    <Advertisement
                        firstImage="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3"
                        secondImage="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3"
                    />
                </div>

                {/* Main Content - Full width on mobile, centered on desktop */}
                <main className="w-full lg:w-4/6 mx-auto overflow-y-auto px-4 pt-16 lg:pt-20 pb-4">
                    {children}
                </main>

                {/* Right Advertisement - Hidden on mobile, fixed on desktop */}
                <div className="hidden lg:block lg:w-1/6 fixed right-0 top-0 bottom-0 z-40">
                    <Advertisement
                        firstImage="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3"
                        secondImage="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3"
                    />
                </div>

                {/* Mobile-only Advertisement - Displayed below content on mobile */}
                <div className="block lg:hidden w-full px-4 py-1">
                    <Advertisement
                        firstImage="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3"
                        secondImage="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3"
                    />
                    <Advertisement
                        firstImage="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3"
                        secondImage="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3"
                    />
                </div>
            </div>
        </div>
    );
}