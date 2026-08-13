"use client";

import aboutimg from "@/public/aboutbg.jpg";
import AboutUs from '@/components/pages/aboutus';
import PageHero from '@/components/pages/pageHero';
import { OurHistory } from '@/components/pages/text';
import MeetOurTeam from "@/components/pages/our_team";
import ImpactStats from "@/components/pages/countDown";



export default function About() {
    return (
        <>
            <PageHero
                page_title="About Us"
                description="Empowering lives, preserving our heritage, and creating opportunities for children, young people, and communities to build a better future."
                image={aboutimg}
            />
            <AboutUs />
            <OurHistory />
            <MeetOurTeam />
            <ImpactStats />
        </>
    );
}