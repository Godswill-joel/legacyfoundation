"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";

type Feature = {
    bgImageUrl: string;
    description: string;
    iconUrl: string;
    title: string;
};

type DonateData = {
    buttonText: string;
    checklist: string[];
    description: string;
    heading: string;
    imageUrl: string;
    label: string;
    subheading: string;
    features: Feature[];
};

export default function Donate() {
    const [donate, setDonate] = useState<DonateData | null>(null);
    const [features, setFeatures] = useState<Feature[]>([]);

    useEffect(() => {
        const homeRef = doc(db, "homePage", "home");

        const unsubscribe = onSnapshot(
            homeRef,
            (snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.data();

                    if (Array.isArray(data.features)) {
                        setFeatures(data.features);
                    }


                    if (data.donate) {
                        setDonate(data.donate);
                    }
                    
                }
            },
            (error) => {
                console.error("Error fetching donate section:", error);
            }
        );

        return () => unsubscribe();
    }, []);

    if (!donate) {
        return null;
    }

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
                                src={feature.bgImageUrl}
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
                                    src={feature.iconUrl}
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
                        {donate.label}
                    </p>

                    <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                        {donate.heading}
                    </h2>

                    <p className="mt-4 text-xl font-medium leading-relaxed">
                        {donate.subheading}
                    </p>

                    <p className="mt-5 text-sm leading-7 text-black sm:text-base">
                        {donate.description}
                    </p>

                    <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                        {donate.checklist.map((item) => (
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
                            {donate.buttonText}
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
                            src={donate.imageUrl}
                            alt={donate.label}
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