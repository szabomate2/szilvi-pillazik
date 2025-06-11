import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light-brown">
      <h1 className="text-4xl font-bold mb-4">Welcome to Szilvi Pillàzik</h1>
      <p className="text-lg mb-8">Your go-to destination for beautiful lashes.</p>
      <div className="flex space-x-4">
        <a href="/about" className="bg-brown text-white px-4 py-2 rounded">About Me</a>
        <a href="/prices" className="bg-brown text-white px-4 py-2 rounded">Prices</a>
        <a href="/contact" className="bg-brown text-white px-4 py-2 rounded">Contact</a>
        <a href="/booking" className="bg-brown text-white px-4 py-2 rounded">Book Now</a>
      </div>
      
      <section>
        <h2>About Me</h2>
        <p>Hello! I'm Szilvi, and this is my personal space on the web.</p>
      </section>
      
      <section>
        <h2>Latest Updates</h2>
        <p>Check back soon for updates and new content!</p>
      </section>
    </div>
  )
}