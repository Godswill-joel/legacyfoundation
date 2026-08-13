import Image from "next/image";
import Link from "next/link";
import logo from '@/public/logo.jpeg';

const footerLinks = [
    { label: "Service", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Donate", href: "/donate" },
    { label: "Destination", href: "/destinations" },
];

const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Tours", href: "/tours" },
    { label: "Destinations", href: "/destinations" },
    { label: "Contact", href: "/contact" },
];

const socialLinks = [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "WhatsApp", href: "#" },
];

export default function Footer() {
    return (
        <footer className="border-t  p-4 text-[#28251f]">
            <div className="mx-auto  px-6 py-14 sm:px-8 lg:px-10">
                {/* Main footer */}
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <div className='border-r-2 p-4'>
                            <Image src={logo} alt="Logo" className="h-20 w-20" />
                        </div>

                        <p className="mt-6 max-w-xs font-serif text-lg leading-8 text-[#5e584d]">
                            Discover the stories, places, and heritage that make every
                            journey unforgettable.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="font-serif text-xl font-semibold">
                            Quick Links
                        </h2>

                        <ul className="mt-6 space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-600 transition-colors hover:text-[#28251f]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h2 className="font-serif text-xl font-semibold">
                            Contact
                        </h2>

                        <div className="mt-6 space-y-4 text-sm leading-6 text-gray-600">
                            <p>
                                32 Heritage Street
                                <br />
                                Abuja, Nigeria
                            </p>

                            <a
                                href="tel:+2340000000000"
                                className="block transition-colors hover:text-[#28251f]"
                            >
                                +234 000 000 0000
                            </a>

                            <a
                                href="mailto:hello@nusara.tour"
                                className="block transition-colors hover:text-[#28251f]"
                            >
                                hello@nusara.tour
                            </a>
                        </div>
                    </div>

                    {/* Social / Discover */}
                    <div>
                        <p className="text-lg text-[#00000] font-semibold">
                            Get To Know More
                        </p>

                        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-serif text-lg transition-colors hover:text-[#81705a]"
                                >
                                    {social.label}
                                </a>
                            ))}
                        </div>

                        <a
                            href="mailto:hello@nusara.tour"
                            className="mt-6 block font-serif text-xl transition-colors hover:text-[#81705a]"
                        >
                            hello@nusara.tour
                        </a>
                    </div>
                </div>

                {/* Navigation */}
                <div className="mt-14 border-t border-[#d8d1c5] pt-8">
                    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="font-serif text-lg transition-colors hover:text-[#81705a]"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Bottom */}
                <div className="mt-8 flex flex-col gap-5 border-t border-[#d8d1c5] pt-6 text-sm text-[#81786a] sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Nusara. All rights reserved.
                    </p>

                    <p>
                        Powered by Nusara
                    </p>
                </div>
            </div>
        </footer>
    );
}