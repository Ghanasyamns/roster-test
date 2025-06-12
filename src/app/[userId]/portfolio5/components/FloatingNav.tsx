"use client";

import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        scrolled ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="p-3 rounded-full bg-teal-500 text-white shadow-lg hover:bg-coral-500 transition-colors"
      >
        <ArrowUpIcon className="h-5 w-5" />
      </button>
    </nav>
  );
}
