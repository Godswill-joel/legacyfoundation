"use client";

import { motion } from "motion/react";
import {
    ArrowRight,
    Clock3,
    Heart,
    Mail,
    MapPin,
    Phone,
    Send,
} from "lucide-react";

export default function ContactPage() {
    return (
        <main className="w-full overflow-hidden bg-[#f8f9f6]">
            <section className="px-5 py-16 sm:px-8 md:px-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="mx-auto mb-14 max-w-2xl text-center lg:mb-20"
                    >
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#008000]">
                            Get In Touch
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            We&apos;d Love To Hear From You
                        </h1>

                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                            Whether you want to support our mission, volunteer,
                            partner with us, or simply learn more about our
                            work, we&apos;re here to listen.
                        </p>
                    </motion.div>

                    <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7 }}
                            className="bg-white p-6 shadow-sm sm:p-8 lg:p-10"
                        >
                            <div className="mb-8">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#008000]">
                                    Send Us A Message
                                </p>

                                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                    Let&apos;s Start A Conversation
                                </h2>
                            </div>

                            <form className="space-y-5">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-sm font-medium text-gray-700"
                                        >
                                            Full Name
                                        </label>

                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full border border-gray-200 bg-[#f8f9f6] px-4 py-3 text-sm outline-none transition focus:border-[#008000] focus:ring-1 focus:ring-[#008000]"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-medium text-gray-700"
                                        >
                                            Email Address
                                        </label>

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            className="w-full border border-gray-200 bg-[#f8f9f6] px-4 py-3 text-sm outline-none transition focus:border-[#008000] focus:ring-1 focus:ring-[#008000]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-sm font-medium text-gray-700"
                                    >
                                        Message
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        placeholder="How can we help you?"
                                        className="w-full resize-none border border-gray-200 bg-[#f8f9f6] px-4 py-3 text-sm outline-none transition focus:border-[#008000] focus:ring-1 focus:ring-[#008000]"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex w-full items-center justify-center gap-2 bg-[#008000] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#006b00] sm:w-auto"
                                >
                                    Send Message
                                    <Send className="h-4 w-4" />
                                </motion.button>
                            </form>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7 }}
                            className="space-y-5"
                        >
                            <div className="bg-[#008000] p-6 text-white sm:p-8">
                                <div className="mb-6 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                                            Support Our Mission
                                        </p>

                                        <h2 className="mt-2 text-2xl font-bold">
                                            Give Hope. Change A Life.
                                        </h2>
                                    </div>

                                    <motion.div
                                        animate={{
                                            scale: [1, 1.15, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10"
                                    >
                                        <Heart className="h-5 w-5 fill-white" />
                                    </motion.div>
                                </div>

                                <p className="text-sm leading-7 text-white/80">
                                    Your support helps us empower children,
                                    support education, strengthen communities,
                                    and create opportunities for young people.
                                </p>

                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="mt-6 flex items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-[#008000]"
                                >
                                    Donate Now
                                    <ArrowRight className="h-4 w-4" />
                                </motion.button>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                                <div className="flex gap-4 bg-white p-5 shadow-sm">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#008000]/10 text-[#008000]">
                                        <MapPin className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">
                                            Our Address
                                        </h3>
                                        <p className="mt-1 text-sm leading-6 text-gray-600">
                                            Patrick Osam Ntun Legacy Foundation
                                            <br />
                                            Port Harcourt, Rivers State,
                                            Nigeria
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 bg-white p-5 shadow-sm">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#008000]/10 text-[#008000]">
                                        <Mail className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">
                                            Email Us
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-600">
                                            info@yourfoundation.org
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 bg-white p-5 shadow-sm">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#008000]/10 text-[#008000]">
                                        <Phone className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">
                                            Call Us
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-600">
                                            +234 903 000 0000
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="px-5 pb-16 sm:px-8 md:px-12 lg:px-16 lg:pb-24">
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="mb-8"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#008000]">
                            Find Us
                        </p>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            Visit Our Office
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[320px] overflow-hidden bg-[#e9ece7] sm:h-[400px]"
                    >
                        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(#008000_1px,transparent_1px),linear-gradient(90deg,#008000_1px,transparent_1px)] [background-size:40px_40px]" />

                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#008000] text-white shadow-xl">
                                <MapPin className="h-6 w-6" />
                            </div>

                            <div className="mt-3 bg-white px-5 py-3 text-center shadow-lg">
                                <p className="text-sm font-bold">
                                    Patrick Osam Ntun Legacy Foundation
                                </p>
                                <p className="mt-1 text-xs text-gray-500">
                                    Port Harcourt, Rivers State
                                </p>
                            </div>
                        </motion.div>

                        <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white px-4 py-2 text-xs font-medium text-gray-600 shadow-md">
                            <Clock3 className="h-4 w-4 text-[#008000]" />
                            Mon - Fri · 9:00 AM - 5:00 PM
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}