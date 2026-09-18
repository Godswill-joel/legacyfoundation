"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/button";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

type HeroSlide = {
    buttonText: string;
    description: string;
    imageUrl: string;
    label: string;
    title: string;
};

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);
    const [slides, setSlides] = useState<HeroSlide[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const homeRef = doc(db, "homePage", "home");

        const unsubscribe = onSnapshot(
            homeRef,
            (snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.data();

                    setSlides(data.hero?.slides ?? []);
                } else {
                    setSlides([]);
                }

                setLoading(false);
            },
            (error) => {
                console.error("Error fetching homepage:", error);
                setSlides([]);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (slides.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % slides.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [slides.length]);

    useEffect(() => {
        if (currentImage >= slides.length && slides.length > 0) {
            setCurrentImage(0);
        }
    }, [currentImage, slides.length]);

    if (loading || slides.length === 0) {
        return null;
    }

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
                        src={slide.imageUrl}
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
                                    {slide.buttonText}
                                </Button>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
}
