import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between max-w-7xl mx-auto px-6 py-6 ">
      {/* Logo */}
      <div className="text-white font-semibold text-lg">SnippetVault</div>

      {/* Nav Links */}
      <nav className="hidden md:flex gap-8 text-white/80">
        <a className="hover:text-white cursor-pointer transition-colors duration-200">Features</a>
        <a className="hover:text-white cursor-pointer transition-colors duration-200">Solutions</a>
        <a className="hover:text-white cursor-pointer transition-colors duration-200">Pricing</a>
        <a className="hover:text-white cursor-pointer transition-colors duration-200">Docs</a>
      </nav>

      {/* Buttons */}
      <div className="flex gap-4 items-center">
        <Link href={'/login'}>
        
        <button className="text-white/80 hover:text-white transition-colors duration-200">Log in</button>
        </Link>

        <Link href={'/register'}>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg">
          Get Started
        </button>
        </Link>

      </div>
    </header>
  );
};

export default Navbar;