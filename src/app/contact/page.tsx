import React from "react";

export default function Contact() {
    return (
            <div>
                {/* Contact Section */}
                <main id="contact" className="container mx-auto px-6 py-12 md:py-24">
                    <div className="text-center">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight">Contact</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Contact us at <a href="mailto:contact@futuretellers.com" className="text-blue-400 hover:underline">contact@futuretellers.com</a> <br />
                            or call us at <a href="tel:+1234567890" className="text-blue-400 hover:underline">123-456-7890</a>.
                        </p>
                    </div>
                </main>
            </div>
    );
}