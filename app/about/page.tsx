"use client";

import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";

import AboutUs from "@/components/pages/aboutus";
import PageHero from "@/components/pages/pageHero";
import { OurHistory } from "@/components/pages/text";
import MeetOurTeam from "@/components/pages/our_team";
import ImpactStats from "@/components/pages/countDown";

import { db } from "@/lib/firebase";

type HeroData = {
    title: string;
    description: string;
    imageUrl: string;
};

type HistoryItem = {
    date: string;
    description: string;
    id1: number;
    imageUrl: string;
    title: string;
};

type TeamItem = {
    id1?: number;
    id2?: number;
    imageUrl: string;
    name: string;
    position: string;
    social: {
      platform: string;
      url: string;
    }[];
  };

type StatItem = {
    label: string;
    suffix: string;
    value: number;
};

type AboutData = {
    hero: HeroData;
    history: HistoryItem[];
    stats: StatItem[];
    team: TeamItem[];
};

export default function About() {
    const [about, setAbout] = useState<AboutData | null>(null);

    useEffect(() => {
        const aboutRef = doc(db, "aboutPage", "about");

        const unsubscribe = onSnapshot(
            aboutRef,
            (snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.data();

                    setAbout({
                        hero: data.hero,
                        history: data.history ?? [],
                        stats: data.stats ?? [],
                        team: data.team ?? [],
                    });
                }
            },
            (error) => {
                console.error("Error fetching about page:", error);
            }
        );

        return () => unsubscribe();
    }, []);

    if (!about) {
        return null;
    }

    return (
        <>
            <PageHero
                page_title={about.hero.title}
                description={about.hero.description}
                image={about.hero.imageUrl}
            />
            <AboutUs />

            <OurHistory history={about.history} />

            <MeetOurTeam team={about.team} />

            <ImpactStats stats={about.stats} />
        </>
    );
}