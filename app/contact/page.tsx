"use client";

import aboutimg from "@/public/aboutbg.jpg";
import PageHero from '@/components/pages/pageHero';
import ContactPage from "@/components/pages/contact";
import ImpactStats from "@/components/pages/countDown";



export default function About() {
    return (
        <>
            <PageHero
                page_title="Contact Us"
                description="Empowering lives, preserving our heritage, and creating opportunities for children, young people, and communities to build a better future."
                image={aboutimg}
            />
            <ContactPage />

        </>
    )
}