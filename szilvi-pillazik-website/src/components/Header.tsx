import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-brown-200 p-4">
            <h1 className="text-2xl font-bold text-center text-brown-800">Szilvi Pillàzik</h1>
            <nav className="mt-4">
                <ul className="flex justify-center space-x-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About Me</Link>
                    </li>
                    <li>
                        <Link href="/prices">Prices</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/booking">Book Appointment</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;