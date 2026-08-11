"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/button";

import hero from "@/public/slider1.jpg";
import hero2 from "@/public/1.jpg";
import hero3 from "@/public/2.jpg";

const slides = [
    {
        image: hero,
        label: "Patrick Osam Ntun Legacy Foundation",
        title: "Empowering Lives. Preserving Heritage. Building a Better Future.",
        description:
            "Together, we can create opportunities that give children and young people the support they need to thrive.",
        button: "Donate Now",
    },
    {
        image: hero2,
        label: "Building Brighter Futures",
        title: "Helping Children Build a Better Future.",
        description:
            "Every child deserves the opportunity to learn, grow, and reach their full potential. We work to create meaningful opportunities that give children hope for a brighter tomorrow.",
        button: "Support a Child",
    },
    {
        image: hero3,
        label: "No Child Should Go Hungry",
        title: "Every Child Deserves a Healthy Meal.",
        description:
            "Help us provide food and essential support to children in need, because no child should have to face the day without a meal.",
        button: "Help Feed a Child",
    },
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % slides.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const slide = slides[currentImage];

    return (
        <header className="relative  w-full overflow-hidden">
            <AnimatePresence mode="sync">
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: {
                            duration: 1.2,
                            ease: "easeInOut",
                        },
                        scale: {
                            duration: 5.5,
                            ease: "linear",
                        },
                    }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority={currentImage === 0}
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 flex items-center">
                <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImage}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                            className="max-w-3xl"
                        >
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.15,
                                }}
                                className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white"
                            >
                                {slide.label}
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.25,
                                }}
                                className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
                            >
                                {slide.title}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.4,
                                }}
                                className="mt-6 max-w-2xl text-base leading-7 font-roboto text-white md:text-lg"
                            >
                                {slide.description}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.55,
                                }}
                                className="mt-8"
                            >
                                <Button
                                    size="lg"
                                    className="rounded-none px-8 py-6 text-base"
                                >
                                    {slide.button}
                                </Button>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
}
