import React from "react";
import Link from "next/link";


function Navbar() {
  return (
    <header className="main-header">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Future Tellers</h1>
        </Link>
        <NavLinks />
      </div>
    </header>
  );
}
function NavLinks() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/signin" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">
            Sign in
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

