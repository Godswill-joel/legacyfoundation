"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Stat = {
    value: number;
    suffix: string;
    label: string;
};

const stats: Stat[] = [
    {
        value: 260,
        suffix: "+",
        label: "Total Happy Children",
    },
    {
        value: 110,
        suffix: "+",
        label: "Total Volunteers",
    },
    {
        value: 190,
        suffix: "+",
        label: "Products & Gifts",
    },
    {
        value: 560,
        suffix: "+",
        label: "Worldwide Donors",
    },
];

export default function ImpactStats() {
    return (
        <section className="w-full bg-[#008000] p-8 sm:px-8 md:px-12 lg:px-16 ">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-12 text-center"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                        Our Impact
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                        Making A Difference
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 divide-x divide-y divide-white/20 lg:grid-cols-4 lg:divide-y-0">
                    {stats.map((stat, index) => (
                        <StatCounter
                            key={stat.label}
                            stat={stat}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StatCounter({
    stat,
    index,
}: {
    stat: Stat;
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const isInView = useInView(ref, {
        once: true,
        amount: 0.5,
    });

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const duration = 1800;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const eased = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(eased * stat.value));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, stat.value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
            }}
            className="flex flex-col items-center justify-center px-5 py-8 text-center"
        >
            <div className="flex items-baseline">
                <span className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {count}
                </span>

                <span className="ml-1 text-2xl font-bold text-white sm:text-3xl">
                    {stat.suffix}
                </span>
            </div>

            <div className="mt-3 h-px w-10 bg-white" />

            <p className="mt-3 max-w-32 text-lg font-medium leading-6 text-white">
                {stat.label}
            </p>
        </motion.div>
    );
}