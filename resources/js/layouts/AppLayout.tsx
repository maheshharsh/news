import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Advertisement from "../components/Advertisment"; // Fixed typo in import path

interface MainLayoutProps {
    children: ReactNode;
    currentRoute: string;
}

export default function AppLayout({ children, currentRoute }: MainLayoutProps) {
    return (
        <div className="flex flex-col h-screen">
            <Navbar currentRoute={currentRoute} />
            <div className="flex flex-1 overflow-hidden">
                {/* Left Advertisement - Fixed */}
                <div className="w-1/6 fixed left-0 top-0 bottom-0 z-40">
                    <Advertisement
                        firstImage="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3"
                        secondImage="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3"
                        thirdImage="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3"
                        forthImage="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3"
                    />
                </div>

                {/* Main Content - Scrollable */}
                <main className="w-4/6 mx-auto overflow-y-auto px-4 mt-16">
                    {children}
                </main>

                {/* Right Advertisement - Fixed */}
                <div className="w-1/6 fixed right-0 top-0 bottom-0 z-40">
                    <Advertisement
                        firstImage="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3"
                        secondImage="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3"
                        thirdImage="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3"
                        forthImage="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3"
                    />
                </div>
            </div>
        </div>
    );
}