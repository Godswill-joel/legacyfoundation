"use client";

import Image from "next/image";
import { Phone, Heart, ChevronsRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import bgsvg from "@/public/new.svg";
import loveimg from "@/public/loveimg.png";


export default function AboutUs() {
    return (
        <section className="w-full overflow-hidden px-6 py-20 md:px-10 lg:px-16">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">


                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative flex flex-col items-center justify-center"
                >
                    <div>
                        <Image
                            src={loveimg}
                            alt="Children receiving support"
                            width={500}
                            height={500}
                            className="h-auto object-contain z-10"
                        />
                    </div>

                    <Image
                        src={bgsvg}
                        alt=""
                        width={500}
                        height={500}
                        className="absolute -bottom-10 left-0 h-auto w-auto  -z-10"
                    />

                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-xl"
                >
                    <p className="mb-4 text-[#008000] text-sm font-semibold uppercase flex items-center gap-2 tracking-[0.25em]">
                        <Heart className="h-5 w-5 text-[#008000] fill-[#008000]" /><span> About Us</span>
                    </p>

                    <h2 className="text-3xl font-bold leading-tight ">
                        Helping Children. Empowering Communities. Building a Better Future.
                    </h2>

                    <p className="mt-3 text-base leading-8 text-gray-600 md:text-lg">
                        Patrick Osam Ntun Legacy Foundation is committed to improving the
                        lives of individuals and communities through education, youth
                        empowerment, cultural preservation, and humanitarian initiatives.
                    </p>


                    <div className="mt-8 flex flex-wrap items-center gap-8">
                        <Button
                            className="rounded-full p-4 bg-[#008000] px-4 py-6 text-lg"
                        >
                            <span className="bg-white p-1 rounded-full text-[#008000]">  <ChevronsRight className="h-5 w-5" />  </span> Explore More
                        </Button>

                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#008000] text-[#008000]">
                                <Phone className="h-5 w-5" />
                            </div>

                            <div>
                                <p className="text-sm text-[#008000] font-semibold">
                                    Call Any Time
                                </p>

                                <a
                                    href="tel:+2512353256"
                                    className="font-semibold text-[#008000]"
                                >
                                    +251 235-3256
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
