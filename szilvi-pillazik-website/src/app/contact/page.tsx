import React from 'react';
import GoogleMap from '../../components/GoogleMap';

const ContactPage = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Szilvi Pillàzik</h1>
            <p className="mb-4">For inquiries, please fill out the form below or visit us at our location:</p>
            <GoogleMap />
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