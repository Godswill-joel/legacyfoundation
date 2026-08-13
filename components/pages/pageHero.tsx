"use client";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { motion } from "motion/react";

type PageHeroProps = {
    page_title: string;
    description: string;
    image: string | StaticImageData;
};

export default function PageHero({ page_title, description, image }: PageHeroProps) {
    return (
        <>
            <section className="relative flex w-full items-center overflow-hidden">
                <Image
                    src={image}
                    alt="Patrick Osam Ntun Legacy Foundation"
                    fill
                    className="object-cover object-center w-full"
                />

                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/20" />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 md:px-12 lg:px-16">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        className="max-w-3xl"
                    >

                        <motion.p
                            initial={{
                                opacity: 0,
                                x: -20,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: 0.15,
                            }}
                            className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white/80 sm:text-base"
                        >
                            Patrick Osam Ntun Legacy Foundation
                        </motion.p>

                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.25,
                            }}
                            className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            {page_title}
                        </motion.h1>

                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.4,
                            }}
                            className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8"
                        >
                            {description}
                        </motion.p>

                    </motion.div>
                </div>

            </section>

        </>
    );
}