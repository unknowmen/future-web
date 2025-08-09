import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="main-header">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Image className="dark:invert" src="/next.svg" alt="Logo" width={180} height={38} priority />
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
          </nav>
          
          <Link href="/BookingForm/page.tsx" className="border border-white rounded-md px-5 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300">
            Book a Reading
          </Link>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="flex-grow font-[family-name:var(--font-geist-sans)]">
        {/* Hero Section */}
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

        {/* About Section */}
        <section id="about" className="container mx-auto px-6 py-12 md:py-24">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight">About Us</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              At Future Tellers, we believe that the stars hold the answers to our lives. Our team of expert astrologers is dedicated to helping you understand the meaning of your horoscope and how it can guide you on your journey to self-discovery and personal growth.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-6 py-12 md:py-24">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight">Contact</h2>
            <p className="mt-4 text-lg text-gray-600">
              Contact us at <a href="mailto:contact@futuretellers.com" className="text-blue-400 hover:underline">contact@futuretellers.com</a> <br />
              or call us at <a href="tel:+1234567890" className="text-blue-400 hover:underline">123-456-7890</a>.
            </p>
          </div>
        </section>
      </main>
      
      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2025 Future Tellers. All rights reserved.</p>
      </footer>

    </div>
  );
}