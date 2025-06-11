"use client";

import React, { useState } from 'react';

const BookingPage = () => {
    const [service, setService] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle booking submission logic here
        alert(`Booking confirmed for ${name} on ${date} at ${time} for ${service}`);
    };

    return (
        <div className="booking-container">
            <h1 className="text-center text-2xl font-bold">Book Your Appointment</h1>
            <form onSubmit={handleSubmit} className="booking-form">
                <div>
                    <label htmlFor="service">Select Service:</label>
                    <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        required
                    >
                        <option value="">--Choose a Service--</option>
                        <option value="Classic Lashes">Classic Lashes</option>
                        <option value="Volume Lashes">Volume Lashes</option>
                        <option value="Hybrid Lashes">Hybrid Lashes</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="date">Select Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="time">Select Time:</label>
                    <input
                        type="time"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="name">Your Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Your Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Book Appointment</button>
            </form>
        </div>
    );
};

export default BookingPage;