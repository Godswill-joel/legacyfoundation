"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "motion/react";
import aboutImg from "@/public/aboutbg.jpg";
import eduImg from "@/public/edu.jpg";
import empImg from "@/public/emp.jpg";
import comImg from "@/public/com.jpg";

type HistoryItem = {
    date: string;
    title: string;
    description: string;
    image: StaticImageData;
};

const history: HistoryItem[] = [
    {
        date: "July 2026",
        title: "The Foundation Was Founded",
        description:
            "Patrick Osam Ntun Legacy Foundation was established with a commitment to empowering lives, preserving cultural heritage, supporting education, and creating opportunities for children, young people, and communities.",
        image: aboutImg,
    },
    {
        date: "2026",
        title: "Building Community Support",
        description:
            "The foundation began its journey of supporting individuals and communities through charitable, humanitarian, educational, and community development initiatives.",
        image: comImg,
    },
    {
        date: "2026",
        title: "Supporting Education",
        description:
            "Education became one of the foundation's core areas of focus, with an emphasis on helping students access learning opportunities and resources that can contribute to a brighter future.",
        image: eduImg,
    },
    {
        date: "2026",
        title: "Feeding and Supporting Children",
        description:
            "The foundation's mission includes improving the welfare of children by supporting access to nutritious food and creating opportunities that help children grow, learn, and thrive.",
        image: comImg,
    },
    {
        date: "2026",
        title: "Empowering Young People",
        description:
            "Youth empowerment became an important part of the foundation's work, focusing on skills development, leadership, creativity, innovation, and opportunities for young people.",
        image: empImg,
    },
];

export function OurHistory() {
    return (
        <section className="w-full overflow-hidden px-5 sm:px-8 md:px-12 lg:px-16 ">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto mb-16 max-w-3xl text-center sm:mb-20 lg:mb-28"
                >
                    <motion.p
                        initial={{
                            opacity: 0,
                            letterSpacing: "0.05em",
                        }}
                        whileInView={{
                            opacity: 1,
                            letterSpacing: "0.25em",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-3 text-sm font-semibold uppercase text-[#008000]"
                    >
                        Our Journey
                    </motion.p>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Our History
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        From our founding to the work we do today, every step of
                        our journey is driven by our commitment to creating
                        meaningful and lasting change.
                    </p>
                </motion.div>


                <div className="relative hidden md:block">
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                        }}
                        className="
                            absolute
                            bottom-0
                            left-1/2
                            top-0
                            w-1
                            origin-top
                            -translate-x-1/2
                            bg-[#008000]
                        "
                    />

                    <div className="space-y-28 lg:space-y-12">
                        {history.map((item, index) => (
                            <HistoryCard
                                key={item.title}
                                item={item}
                                index={index}
                            />
                        ))}
                    </div>
                </div>


                <div className="relative md:hidden">
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.05 }}
                        transition={{
                            duration: 1.8,
                            ease: "easeInOut",
                        }}
                        className="
                            absolute
                            bottom-0
                            left-[15px]
                            top-0
                            w-1
                            origin-top
                            bg-[#008000]
                        "
                    />

                    <div className="space-y-14">
                        {history.map((item, index) => (
                            <MobileHistoryCard
                                key={item.title}
                                item={item}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


function HistoryCard({
    item,
    index,
}: {
    item: HistoryItem;
    index: number;
}) {
    const reversed = index % 2 !== 0;

    return (
        <motion.article
            initial={{
                opacity: 0,
                y: 60,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="relative grid items-center gap-8 md:grid-cols-2 md:gap-20"
        >
            <motion.div
                initial={{
                    scale: 0,
                    opacity: 0,
                }}
                whileInView={{
                    scale: 1,
                    opacity: 1,
                }}
                viewport={{
                    once: true,
                    amount: 0.5,
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                }}
                className="
                    absolute
                    left-1/2
                    top-1/2
                    z-20
                    flex
                    h-6
                    w-6
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border-4
                    border-[#f8f9f6]
                    bg-[#008000]
                    shadow-lg
                "
            >
                <span className="absolute h-6 w-6 animate-ping rounded-full bg-[#008000]/20" />

                <span className="relative h-2 w-2 rounded-full bg-white" />
            </motion.div>

            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                    duration: 0.5,
                    delay: 0.25,
                }}
                className={`
                    absolute
                    top-1/2
                    z-10
                    hidden
                    h-1
                    w-10
                    bg-[#008000]
                    md:block
                    ${reversed
                        ? "right-1/2 mr-3 origin-right"
                        : "left-1/2 ml-3 origin-left"
                    }
                `}
            />

            <motion.div
                initial={{
                    opacity: 0,
                    x: reversed ? 70 : -70,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.2,
                }}
                transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                    y: -8,
                }}
                className={`group relative ${reversed ? "md:order-2" : ""
                    }`}
            >
                <div className="relative aspect-16/10 w-full overflow-hidden shadow-md">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 50vw, 600px"
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                </div>

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.4,
                        duration: 0.5,
                    }}
                    className="absolute left-5 top-5 bg-white px-5 py-3 shadow-lg"
                >
                    <p className="text-lg font-bold text-[#008000]">
                        {item.date}
                    </p>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{
                    opacity: 0,
                    x: reversed ? -70 : 70,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.2,
                }}
                transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                    max-w-xl
                    ${reversed ? "md:order-1 md:pr-10" : "md:pl-10"}
                `}
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45 }}
                    className="text-2xl font-bold tracking-[0.2em] text-[#008000]"
                >
                    {String(index + 1).padStart(2, "0")}
                </motion.p>

                <h3 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                    {item.title}
                </h3>

                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 100 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.45,
                        duration: 0.5,
                    }}
                    className="mt-5 h-1 bg-[#008000]"
                />

                <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                    {item.description}
                </p>
            </motion.div>
        </motion.article>
    );
}


function MobileHistoryCard({
    item,
    index,
}: {
    item: HistoryItem;
    index: number;
}) {
    return (
        <motion.article
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
                amount: 0.12,
            }}
            transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="relative pl-11"
        >
            <motion.div
                initial={{
                    scale: 0,
                    opacity: 0,
                }}
                whileInView={{
                    scale: 1,
                    opacity: 1,
                }}
                viewport={{
                    once: true,
                    amount: 0.4,
                }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 220,
                }}
                className="
                    absolute
                    left-0
                    top-7
                    z-20
                    flex
                    h-8
                    w-8
                    -translate-x-1/2
                    items-center
                    justify-center
                    rounded-full
                    border-4
                    border-[#f8f9f6]
                    bg-[#008000]
                    shadow-md
                "
            >
                <span className="absolute h-8 w-8 animate-ping rounded-full bg-[#008000]/20" />

                <span className="relative text-[9px] font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                </span>
            </motion.div>

            <motion.div
                initial={{
                    scaleX: 0,
                }}
                whileInView={{
                    scaleX: 1,
                }}
                viewport={{
                    once: true,
                    amount: 0.3,
                }}
                transition={{
                    duration: 0.45,
                    delay: 0.15,
                }}
                className="
                    absolute
                    left-[15px]
                    top-11
                    h-1
                    w-7
                    origin-left
                    bg-[#008000]
                "
            />

            <div className="overflow-hidden border border-gray-100 bg-white shadow-sm">
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.96,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="group relative aspect-16/10 overflow-hidden"
                >
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="calc(100vw - 75px)"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/10" />


                    <div className="absolute left-4 top-4 bg-white px-4 py-2 shadow-md">
                        <p className="text-lg font-bold text-[#008000]">
                            {item.date}
                        </p>
                    </div>
                </motion.div>

                <div className="p-5 sm:p-6">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-bold tracking-[0.2em] text-[#008000]"
                    >
                        {String(index + 1).padStart(2, "0")}
                    </motion.p>

                    <h3 className="mt-2 text-xl font-bold leading-tight sm:text-2xl">
                        {item.title}
                    </h3>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 100 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.3,
                            duration: 0.45,
                        }}
                        className="mt-4 h-1  bg-[#008000]"
                    />

                    <p className="mt-4 text-lg leading-7 text-gray-600">
                        {item.description}
                    </p>
                </div>
            </div>
        </motion.article>
    );
}