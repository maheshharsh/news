import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

function Navbar({ currentRoute }: { currentRoute: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to determine active link
  const isActive = (route: string) => currentRoute === route;

  return (
    // <nav className="bg-blue-400 sticky top-0 z-50 shadow-md">
    //   <div className="mx-auto  px-4 sm:px-6 lg:px-8">
    //     <div className="flex h-16 items-center justify-between">
    //       {/* Logo and main nav (left side) */}
    //       <div className="flex items-center">
    //         {/* Mobile menu button */}
    //         <div className="flex-shrink-0 md:hidden">
    //           <button
    //             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    //             className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-slate-500 focus:outline-none"
    //             aria-expanded="false"
    //           >
    //             <span className="sr-only">Open main menu</span>
    //             {!isMobileMenuOpen ? (
    //               <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    //               </svg>
    //             ) : (
    //               <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    //               </svg>
    //             )}
    //           </button>
    //         </div>

    //         {/* Logo */}
    //         <div className="flex-shrink-0">
    //           <Link href="/" className="flex items-center">
    //           <img
    //             className="h-8 w-auto rounded-full"
    //             src="/images/sm.jpg"  // Directly from public folder
    //             alt="News Portal Logo"
    //           />
    //             <span className="ml-2 text-white font-bold text-xl hidden sm:block">Samachar House</span>
    //           </Link>
    //         </div>

    //         {/* Desktop Navigation */}
    //         <div className="hidden md:block ml-6">
    //           <div className="flex space-x-4">
    //             <Link 
    //               href="/" 
    //               className={`px-3 py-2 rounded-md text-xl font-medium ${isActive('/') ? 'bg-slate-500 text-white' : 'text-white hover:bg-slate-500'}`}
    //             >
    //               Home
    //             </Link>
    //             {/* <Link 
    //               href="/worlds" 
    //               className={`px-3 py-2 rounded-md text-xl font-medium ${isActive('/news') ? 'bg-slate-500 text-white' : 'text-white hover:bg-slate-500'}`}
    //             >
    //               World
    //             </Link> */}
    //             <Link 
    //               href="/politics" 
    //               className={`px-3 py-2 rounded-md text-xl font-medium ${isActive('/categories') ? 'bg-slate-500 text-white' : 'text-white hover:bg-slate-500'}`}
    //             >
    //               Politics
    //             </Link>
    //             {/* <Link 
    //               href="/tech" 
    //               className={`px-3 py-2 rounded-md text-xl font-medium ${isActive('/about') ? 'bg-slate-500 text-white' : 'text-white hover:bg-slate-500'}`}
    //             >
    //               Tech
    //             </Link> */}
    //             <Link 
    //               href="/sports" 
    //               className={`px-3 py-2 rounded-md text-xl font-medium ${isActive('/about') ? 'bg-slate-500 text-white' : 'text-white hover:bg-slate-500'}`}
    //             >
    //               Sports
    //             </Link>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Right side items */}
    //       <div className="flex items-center">
    //         {/* Search */}
    //         <div className="hidden md:block relative mx-4">
    //           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    //             <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    //             </svg>
    //           </div>
    //           <input
    //             type="text"
    //             placeholder="Search news..."
    //             className="block w-full pl-10 pr-3 py-2 rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white "
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Mobile menu */}
    //   {isMobileMenuOpen && (
    //     <div className="md:hidden">
    //       <div className="px-2 pt-2 pb-3 space-y-1">
    //         <Link
    //           href="/"
    //           className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'bg-slate-500 text-white' : 'text-white hover:bg-slate-300'}`}
    //           onClick={() => setIsMobileMenuOpen(false)}
    //         >
    //           Home
    //         </Link>
    //         {/* <Link
    //           href="/news"
    //           className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/news') ? 'bg-slate-500 text-white' : 'text-white hover:bg-slate-300'}`}
    //           onClick={() => setIsMobileMenuOpen(false)}
    //         >
    //           News
    //         </Link> */}
    //         <Link
    //           href="/politics"
    //           className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/categories') ? 'bg-slate-500 text-white' : 'text-white hover:bg-slate-300'}`}
    //           onClick={() => setIsMobileMenuOpen(false)}
    //         >
    //           Politics
    //         </Link>
    //         <Link
    //           href="/sports"
    //           className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'bg-slate-500 text-white' : 'text-white hover:bg-slate-300'}`}
    //           onClick={() => setIsMobileMenuOpen(false)}
    //         >
    //           Sports
    //         </Link>
            
    //         {/* Mobile search */}
    //         <div className="px-3 py-2">
    //           <div className="relative mt-1">
    //             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    //               <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    //               </svg>
    //             </div>
    //             <input
    //               type="text"
    //               placeholder="Search news..."
    //               className="block w-full pl-10 pr-3 py-2 rounded-md bg-slate-300 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </nav>

                <nav className="bg-blue-500 text-white h-16 fixed top-0 w-full z-50 flex items-center justify-between px-6 shadow-md">
                    <div className="flex items-center space-x-4">
                        <img src="/images/sm.jpg" className="h-8 rounded-full" alt="Logo" />
                        <span className="font-bold text-xl hidden sm:block">Samachar House</span>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <Link href="/" className={`text-white ${isActive("/") && "underline"}`}>
                            Home
                        </Link>
                        <Link href="/politics" className={`text-white ${isActive("/politics") && "underline"}`}>
                            Politics
                        </Link>
                        <Link href="/sports" className={`text-white ${isActive("/sports") && "underline"}`}>
                            Sports
                        </Link>
                    </div>
                </nav>
    
  );
}

export default Navbar;