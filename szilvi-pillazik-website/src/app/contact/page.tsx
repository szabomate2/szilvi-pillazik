"use client";

import React from 'react';

const ContactPage = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
            <p className="mb-4">Get in touch with Szilvi Pillàzik.</p>
            
            <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                <p className="mb-1">Email: your.email@example.com</p>
                <p>Phone: +1 (555) 123-4567</p>
            </section>
            
            <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Social Media</h2>
                <p>Connect with me on social media platforms.</p>
            </section>
            
            <form className="mt-4 w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                    <input className="border rounded w-full py-2 px-3" type="text" id="name" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                    <input className="border rounded w-full py-2 px-3" type="email" id="email" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                    <textarea className="border rounded w-full py-2 px-3" id="message" rows="4" required></textarea>
                </div>
                <button className="bg-brown-500 text-white py-2 px-4 rounded" type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactPage;