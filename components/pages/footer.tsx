import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.jpeg";
import youtube from "@/public/youtube.png";
import instagram from "@/public/instagram.png";
import whatsapp from "@/public/whatsapp.png";

const footerLinks = [
    { label: "Service", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Donate", href: "/donate" },
    { label: "Gallery", href: "/gallery" },
];

const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Tours", href: "/tours" },
    { label: "Destinations", href: "/destinations" },
    { label: "Contact", href: "/contact" },
];

const socialLinks = [
    { href: "#", icon: instagram, alt: "Instagram" },
    { href: "#", icon: youtube, alt: "YouTube" },
    { href: "#", icon: whatsapp, alt: "WhatsApp" },
];

export default function Footer() {
    return (
        <footer className="border-t p-4 text-[#28251f]">
            <div className="mx-auto px-6 py-14 sm:px-8 lg:px-10">

                {/* Main footer */}
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <div className="border-r-2 p-4">
                            <Image
                                src={logo}
                                alt="Logo"
                                className="h-20 w-20"
                            />
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

                    {/* Social */}
                    <div>
                        <p className="text-lg font-semibold text-[#28251f]">
                            Get To Know More
                        </p>

                        <div className="mt-5 flex items-center gap-5">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.alt}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8d1c5] transition-all duration-300 hover:border-[#81705a] "
                                >
                                    <Image
                                        src={social.icon}
                                        alt={social.alt}
                                        className="h-7 w-7 object-contain"
                                    />
                                </a>
                            ))}
                        </div>

                        <a
                            href="mailto:hello@nusara.tour"
                            className="mt-6 block font-serif text-xl transition-colors hover:text-[#008000]"
                        >
                            hello@nusara.tour
                        </a>
                    </div>
                </div>

                {/* Navigation */}
                <div className="mt-14 border-t border-[#d8d1c5] pt-8">
                    <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="font-serif text-lg transition-colors  hover:text-[#008000]"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Bottom */}
                <div className="mt-8 flex flex-col gap-5 border-t border-[#d8d1c5] pt-6 text-sm text-[#81786a] sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}