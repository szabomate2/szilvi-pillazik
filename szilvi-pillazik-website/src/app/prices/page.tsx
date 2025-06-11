import React from 'react';

const PricesPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-brown-600">Prices</h1>
            <ul className="mt-4">
                <li className="py-2">
                    <span className="font-semibold">Classic Lash Extensions:</span> $100
                </li>
                <li className="py-2">
                    <span className="font-semibold">Volume Lash Extensions:</span> $150
                </li>
                <li className="py-2">
                    <span className="font-semibold">Hybrid Lash Extensions:</span> $125
                </li>
                <li className="py-2">
                    <span className="font-semibold">Lash Fill:</span> $60
                </li>
                <li className="py-2">
                    <span className="font-semibold">Lash Removal:</span> $30
                </li>
            </ul>
            <p className="mt-4 text-gray-600">
                For any special requests or custom services, please contact us directly.
            </p>
        </div>
    );
};

export default PricesPage;