"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "motion/react";

import icon from "@/public/icons8-facebook-48.png";
import whatsapp from "@/public/wh.png";
import x from "@/public/x.png";
import instagram from "@/public/insta.png";

import pc from "@/public/pc.jpg";
import ceo from "@/public/ceo.jpg";
import cm from "@/public/cm.jpg";
import yd from "@/public/yd.jpg";

type SocialPlatform = {
    platform: "facebook" | "whatsapp" | "instagram" | "twitter";
    url: string;
};

type TeamMember = {
    image: StaticImageData;
    name: string;
    position: string;
    social?: SocialPlatform[];
};

const socialIcons: Record<SocialPlatform["platform"], StaticImageData> = {
    facebook: icon,
    whatsapp: whatsapp,
    instagram: instagram,
    twitter: x,
};

const team: TeamMember[] = [
    {
        image: ceo,
        name: "Patrick Osam Ntun",
        position: "Founder & Director",
        social: [
            {
                platform: "facebook",
                url: "https://facebook.com/",
            },
            {
                platform: "whatsapp",
                url: "https://wa.me/2349030000000",
            },
        ],
    },

    {
        image: pc,
        name: "Godswill Success",
        position: "Program Coordinator",
        social: [
            {
                platform: "facebook",
                url: "https://facebook.com/",
            },
        ],
    },

    {
        image: cm,
        name: "Bola Ahmed Wike",
        position: "Community Manager",
        social: [
            {
                platform: "instagram",
                url: "https://instagram.com/",
            },
            {
                platform: "facebook",
                url: "https://facebook.com/",
            },
        ],
    },

    {
        image: yd,
        name: "Michael Doe",
        position: "Youth Development Lead",
        social: [
            {
                platform: "twitter",
                url: "https://x.com/",
            },
            {
                platform: "whatsapp",
                url: "https://wa.me/2349030000000",
            },
        ],
    },
];

export default function MeetOurTeam() {
    return (
        <section className="w-full overflow-hidden px-5 py-16 sm:px-8 md:px-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-7xl">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-14 max-w-2xl text-center lg:mb-20"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#008000]">
                        Our People
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Meet Our Team
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        Meet the dedicated people working together to create
                        meaningful change and build a better future for our
                        communities.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {team.map((member, index) => (
                        <motion.article
                            key={member.name}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                            className="group text-center"
                        >
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                                className="mx-auto w-fit"
                            >
                                <div className="relative h-56 w-56 overflow-hidden rounded-full border-[6px] border-[#008000]/10 bg-gray-100 sm:h-60 sm:w-60 lg:h-56 lg:w-56">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 640px) 224px, (max-width: 1024px) 240px, 224px"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </motion.div>

                            <div className="mt-6">
                                <h3 className="text-xl font-bold">
                                    {member.name}
                                </h3>

                                <p className="mt-1 text-sm font-medium text-[#008000]">
                                    {member.position}
                                </p>

                                {member.social && member.social.length > 0 && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: 10,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.25 + index * 0.1,
                                        }}
                                        className="mt-4 flex items-center justify-center gap-3"
                                    >
                                        {member.social.map((social) => (
                                            <motion.a
                                                key={social.platform}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${member.name} on ${social.platform}`}
                                                whileHover={{
                                                    y: -3,
                                                    scale: 1.1,
                                                }}
                                                whileTap={{
                                                    scale: 0.9,
                                                }}
                                                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white transition-colors duration-300  "
                                            >
                                                <Image
                                                    src={socialIcons[social.platform]}
                                                    alt={social.platform}
                                                    width={20}
                                                    height={20}
                                                    className="h-5 w-5 object-contain"
                                                />
                                            </motion.a>
                                        ))}
                                    </motion.div>
                                )}
                            </div>

                            {/* Decorative Line */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 40 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3 + index * 0.1,
                                }}
                                className="mx-auto mt-4 h-1 bg-[#008000]"
                            />
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}