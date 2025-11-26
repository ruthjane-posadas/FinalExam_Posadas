"use client";

export default function Navbar() {
    const navLinks = [
        { name: "Home", path: "home" },
        { name: "About", path: "about" },
        { name: "Works", path: "works" },
        { name: "Services", path: "services" },
        { name: "Contacts", path: "contacts" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-4 py-3 bg-black/50 backdrop-blur-md text-white z-50">
            <h1 className="text-lg sm:text-xl font-bold">Rutopia</h1>

            <ul className="hidden sm:flex space-x-6">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a
                            href={`#${link.path}`}
                            className="hover:text-blue-400 transition-colors duration-200"
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
