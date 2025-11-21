"use client";

import { useAuth } from "../../lib/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f14] via-[#121a23] to-[#0a0f14] text-white flex flex-col shadow-inner shadow-black/50">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-blue-900 border-b border-blue-700">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white text-xl font-bold"
          >
            ☰
          </button>
          <img
            src="/steamlogo.png"
            alt="Steam Logo"
            className="h-8 w-auto"
          />
          <nav className="flex gap-6 text-sm font-semibold uppercase">
            <a href="#" className="hover:underline">
              TOKO
            </a>
            <a href="#" className="hover:underline">
              KOMUNITAS
            </a>
            <a href="#" className="hover:underline">
              TENTANG
            </a>
            <a href="#" className="hover:underline">
              BANTUAN
            </a>
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm font-semibold"
        >
          Logout
        </button>
      </header>

      {/* Banner */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img
          src="/banner.png"
          alt="Diskon Musim Gugur"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg">
            DISKON MUSIM GUGUR
          </h1>
          
          <div className="mt-2 flex gap-4 items-center">
            <span className="bg-orange-600 px-4 py-1 font-bold uppercase rounded drop-shadow-lg">
              STEAM
            </span>
            <span className="bg-orange-500 px-4 py-1 font-semibold uppercase rounded drop-shadow-lg text-sm">
              SEKARANG SAMPAI 6 OKT PUKUL 10.00 WAKTU PASIFIK
            </span>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <main className="flex-grow overflow-y-auto p-6 space-y-12">
        {/* Featured Games Section */}
        <section>
          <h2 className="text-3xl font-bold mb-2">Difiturkan di Diskon Pilihan</h2>
          <p className="text-gray-300 mb-4">
            Penawaran Istimewa untuk Game-game Istimewa Sepanjang Masa
          </p>
          <div className="flex space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-900">
            {[
              {
                title: "GreedFall",
                image: "/browse.png",
                discount: 90,
                originalPrice: 299000,
                discountedPrice: 29900,
              },
              {
                title: "Haven",
                image: "/browse2.png",
                discount: 90,
                originalPrice: 206999,
                discountedPrice: 20699,
              },
              {
                title: "Rise of the Tomb Raider",
                image: "/browse3.png",
                discount: 90,
                originalPrice: 325000,
                discountedPrice: 32500,
              },
            ].map((game, idx) => (
              <div
                key={idx}
                className="relative min-w-[280px] bg-blue-800 rounded overflow-hidden shadow-lg flex-shrink-0"
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-lime-400 text-black font-bold px-2 rounded text-sm">
                      -{game.discount}%
                    </span>
                    <span className="line-through text-gray-400 text-sm">
                      Rp {game.originalPrice.toLocaleString("id-ID")}
                    </span>
                  </div>
                  <p className="font-semibold text-white text-lg">
                    Rp {game.discountedPrice.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Games Section */}
        <section>
          <h2 className="text-3xl font-bold mb-2">Rekomendasi</h2>
          <div className="flex space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-900">
            {[
              {
                title: "Palworld",
                image: "/game1.png",
                discount: 25,
                originalPrice: 245999,
                discountedPrice: 184499,
                live: false,
              },
              {
                title: "Stronghold Crusader",
                image: "/gambar2.png",
                discount: 20,
                originalPrice: 165999,
                discountedPrice: 132799,
                live: true,
              },
              {
                title: "F1 25",
                image: "/game3.png",
                discount: 30,
                originalPrice: 659000,
                discountedPrice: 461300,
                live: false,
              },
              {
                title: "Sekiro",
                image: "/browse.png",
                discount: 50,
                originalPrice: 891000,
                discountedPrice: 445500,
                live: false,
              },
            ].map((game, idx) => (
              <div
                key={idx}
                className="relative min-w-[220px] bg-blue-800 rounded overflow-hidden shadow-lg flex-shrink-0"
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-36 object-cover"
                />
                {game.live && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                    LIVE
                  </div>
                )}
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-lime-400 text-black font-bold px-2 rounded text-sm">
                      -{game.discount}%
                    </span>
                    <span className="line-through text-gray-400 text-sm">
                      Rp {game.originalPrice.toLocaleString("id-ID")}
                    </span>
                  </div>
                  <p className="font-semibold text-white text-lg">
                    Rp {game.discountedPrice.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 z-50 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-white text-xl mb-4"
          >
            ✕
          </button>
          <ul className="space-y-4">
            <li>
              <a href="#" className="block hover:bg-gray-700 p-2 rounded">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block hover:bg-gray-700 p-2 rounded">
                Library
              </a>
            </li>
            <li>
              <a href="#" className="block hover:bg-gray-700 p-2 rounded">
                Store
              </a>
            </li>
            <li>
              <a href="#" className="block hover:bg-gray-700 p-2 rounded">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="block hover:bg-gray-700 p-2 rounded">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
