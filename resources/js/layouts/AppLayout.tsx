import React from "react";
import Sidebar from "../components/Navbar";
import Advertisment from "../components/Advertisment";

function AppLayout() {
    return (
        <>
            <Sidebar />
            <div className="flex h-screen">
                {/* Left Advertisement - 25% */}
                <div className="w-1/4">
                    <Advertisment position="Left" />
                </div>

                {/* Main Content - 50% */}
                <div className="w-2/4 bg-white flex items-center justify-center">
                    <h1 className="text-xl font-semibold">Main Content Area</h1>
                </div>

                {/* Right Advertisement - 25% */}
                <div className="w-1/4">
                    <Advertisment position="Right" />
                </div>
            </div>
        </>
    );
}

export default AppLayout;
