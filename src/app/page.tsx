import Image from "next/image";
import Link from "next/link";
import "./globals.css";


export default function page() {
  return (
    <div>
      <main className="bg-dark text-white min-h-screen">
        {/* Home Section */}
        <section id="home" className="container mx-auto px-6 py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/mystic.jpg"
                alt="mystic"
                className="rounded-lg max-w-sm w-full h-auto object-cover shadow-2xl shadow-purple-900/20"
                width={500}
                height={600}
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight">
                Find Clarity in the Stars
              </h1>
              <p className="mt-4 text-xl text-gray-400">Discover your destiny with our expert tarot and astrology readings.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}