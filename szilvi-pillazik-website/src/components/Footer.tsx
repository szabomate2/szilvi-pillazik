import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-brown-200 text-center py-4">
            <div className="container mx-auto">
                <p className="text-brown-600">
                    &copy; {new Date().getFullYear()} Szilvi pillàzik. All rights reserved.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="/about" className="text-brown-600 hover:underline">About</a>
                    <a href="/prices" className="text-brown-600 hover:underline">Prices</a>
                    <a href="/contact" className="text-brown-600 hover:underline">Contact</a>
                    <a href="/booking" className="text-brown-600 hover:underline">Booking</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;