import React from 'react';

const AboutPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="mb-4">
                Welcome to Szilvi Pillàzik! My name is Szilvi, and I am passionate about enhancing natural beauty through expert lash services. With years of experience in the beauty industry, I strive to provide my clients with the best possible experience and results.
            </p>
            <p className="mb-4">
                At Szilvi Pillàzik, I offer a range of lash services tailored to meet your individual needs. Whether you're looking for a subtle enhancement or a dramatic look, I am here to help you achieve your desired style.
            </p>
            <p className="mb-4">
                My mission is to make every client feel beautiful and confident. I use high-quality products and techniques to ensure your lashes look stunning and last long.
            </p>
            <p>
                Thank you for considering me for your lash needs. I look forward to helping you look and feel your best!
            </p>
            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Background</h2>
                <p className="mb-4">
                    This is where you can share your background, education, and experience.
                </p>
            </section>
            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Interests</h2>
                <p>
                    Share your hobbies, interests, and passions here.
                </p>
            </section>
        </div>
    );
};

export default AboutPage;