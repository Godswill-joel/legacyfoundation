"use client";

import Image from "next/image";
import { motion } from "motion/react";
import icon1 from "@/public/feature1.png";
import icon2 from "@/public/feature2.png";
import icon3 from "@/public/feature3.png";
import icon4 from "@/public/feature4.png";
import eduImg from "@/public/edu.jpg";
import feed from "@/public/feed.jpg";
import com from "@/public/com.jpg";
import emp from "@/public/emp.jpg";
import aboutimg from '@/public/about-thumb.png';
import { Button } from "@/components/ui/button";

const features = [
    {
        image: icon1,
        bgImage: eduImg,
        title: "Education For Citizens",
        description:
            "Supporting access to quality education, learning resources, and opportunities that help children build a brighter future.",
    },
    {
        image: icon2,
        bgImage: feed,
        title: "Feed A Child",
        description:
            "Providing nutritious meals and essential support to children in need, helping them grow healthy and strong.",
    },
    {
        image: icon3,
        bgImage: emp,
        title: "Youth Empowerment",
        description:
            "Equipping young people with skills, leadership opportunities, and support to reach their full potential.",
    },
    {
        image: icon4,
        bgImage: com,
        title: "Community Development",
        description:
            "Supporting humanitarian and community initiatives that improve lives and create opportunities for sustainable growth.",
    },
];

export default function Donate() {
    return (
        <section className="w-full px-5 py-20 sm:px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                    <motion.article
                        key={feature.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.12,
                            ease: "easeOut",
                        }}
                        whileHover={{ y: -8 }}
                        className="group relative flex flex-col overflow-hidden border bg-white p-7 transition-shadow duration-300 hover:shadow-xl"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-y-0 left-0 z-0 w-0 overflow-hidden transition-all duration-700 ease-in-out group-hover:w-full">
                            <Image
                                src={feature.bgImage}
                                alt=""
                                fill
                                className="object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60" />
                        </div>

                        {/* Card Content */}
                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="flex h-20 w-20 items-center justify-center overflow-hidden p-4 transition-transform duration-500 group-hover:scale-110">
                                <Image
                                    src={feature.image}
                                    alt=""
                                    width={80}
                                    height={80}
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            {/* Text */}
                            <div className="flex flex-1 flex-col">
                                <h3 className="text-xl font-bold leading-snug transition-colors duration-500 group-hover:text-white">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>

            <div className="grid items-center gap-12 border-t pt-20 lg:grid-cols-2 lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-xl"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#008000]">
                        Make A Difference
                    </p>

                    <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                        Join Us and Start Donating Today!
                    </h2>

                    <p className="mt-4 text-xl font-medium leading-relaxed">
                        Helping each other can make the world a better place.
                    </p>

                    <p className="mt-5 text-sm leading-7 text-black sm:text-base">
                        Your support can help provide education, nutritious meals,
                        opportunities, and essential support to children and communities
                        in need. Together, we can create meaningful change and build a
                        better future for the next generation.
                    </p>

                    <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                        {[
                            "Quality education",
                            "Food and nutrition",
                            "Youth empowerment",
                            "Community development",
                            "Health and wellbeing",
                            "Skills and opportunities",
                        ].map((item) => (
                            <li
                                key={item}
                                className="flex items-center gap-3"
                            >
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#008000] text-xs text-white">
                                    ✓
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8">
                        <Button
                            size="lg"
                            className="rounded-none px-8 py-6"
                        >
                            Donate Now
                        </Button>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative overflow-hidden"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="relative"
                    >
                        <Image
                            src={aboutimg}
                            alt="Support children through donation"
                            width={700}
                            height={600}
                            className="h-auto w-full object-cover"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}