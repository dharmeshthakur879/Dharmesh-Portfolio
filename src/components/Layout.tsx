import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top automatically on route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen bg-transparent text-[#F8FAFC] antialiased font-sans flex flex-col justify-between">
      <div>
        {/* Glassmorphic Navigation bar */}
        <Navbar />

        <main className="w-full">
          <Outlet />
        </main>
      </div>

      {/* Floating Scroll-to-Top Action with Gold Glow & Progress Indicator */}
      <ScrollToTopButton />

      {/* Socials & Navigation Footer */}
      <Footer />
    </div>
  );
}
