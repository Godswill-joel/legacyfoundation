"use client";

import Image from "next/image";
import { ChevronsRight, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import feed from "@/public/feed.jpg";
import com from "@/public/com.jpg";
import emp from "@/public/emp.jpg";
import Link from "next/link";


const events = [
    {
        date: "29",
        month: "May",
        title: "Community Development & Outreach",
        description:
            "Join us as we come together to support children, families, and communities through meaningful outreach and humanitarian initiatives.",
        venue: "Port Harcourt, Rivers State",
        image: feed,
    },
    {
        date: "12",
        month: "Jun",
        title: "Education For Every Child",
        description:
            "An initiative focused on creating access to quality education and learning opportunities for children from disadvantaged communities.",
        venue: "Port Harcourt, Rivers State",
        image: com,
    },
    {
        date: "24",
        month: "Jul",
        title: "Youth Empowerment Programme",
        description:
            "A special programme designed to equip young people with skills, knowledge, and opportunities to build a better future.",
        venue: "Port Harcourt, Rivers State",
        image: emp,
    },
    {
        date: "15",
        month: "Aug",
        title: "Feed A Child Initiative",
        description:
            "Help us provide nutritious meals and essential support to children while promoting their health, wellbeing, and development.",
        venue: "Port Harcourt, Rivers State",
        image: feed,
    },
];

export default function EventHomePage() {
    return (
        <section className="w-full px-5 mb-3 sm:px-8 md:px-12 lg:px-16">
            <div className="mx-auto max-w-7xl">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
                >
                    <div>
                        <p className="mb-3 text-lg font-semibold uppercase tracking-[0.2em] text-[#008000]">
                            Upcoming Events
                        </p>

                        <p className="max-w-md text-lg leading-7 text-gray-600">
                            Discover our upcoming programmes, community initiatives,
                            and events as we work together to create meaningful
                            change.
                        </p>
                    </div>


                </motion.div>

                <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                    {events.map((event, index) => (
                        <motion.article
                            key={event.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                            whileHover={{ y: -6 }}
                            className="group grid overflow-hidden border bg-white transition-shadow duration-300 hover:shadow-xl sm:grid-cols-[220px_1fr]"
                        >
                            <div className="relative h-64 overflow-hidden sm:h-full">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute left-4 top-4 flex flex-col items-center bg-white px-3 py-2 shadow-md">
                                    <span className="text-2xl font-bold leading-none">
                                        {event.date}
                                    </span>

                                    <span className="mt-1 text-xs font-bold uppercase tracking-wider text-[#008000]">
                                        {event.month}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between p-6 sm:p-7">
                                <div>
                                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#008000]">
                                        Upcoming Event
                                    </p>

                                    <h2 className="font-bold leading-snug sm:text-2xl">
                                        {event.title}
                                    </h2>

                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                                        {event.description}
                                    </p>
                                </div>

                                <div className="mt-6 border-t pt-5">
                                    <div className="flex items-start gap-2">
                                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#008000]" />

                                        <span className="text-sm text-gray-600">
                                            {event.venue}
                                        </span>
                                    </div>

                                    <Button
                                        className="mt-5 rounded-full bg-[#008000] px-4 py-5 text-sm"
                                    >
                                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#008000]">
                                            <ChevronsRight className="h-4 w-4" />
                                        </span>
                                        <Link href="/gallery">
                                            Event Details
                                        </Link>

                                    </Button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-12 flex justify-center"
                >
                    <Button
                        variant="outline"
                        className="rounded-full border-[#008000] px-6 py-6 text-[#008000] transition-all hover:bg-[#008000] hover:text-white"
                    >
                        View More Events
                        <ChevronsRight className="ml-2 h-5 w-5" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}