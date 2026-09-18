"use client";

import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";

import PageHero from "@/components/pages/pageHero";
import ContactPage from "@/components/pages/contact";
import { db } from "@/lib/firebase";

type ContactData = {
    address: string;
    email: string;
    phone: string;
    hero: {
        description: string;
        imageUrl: string;
        title: string;
    };
    quotes: {
        description: string;
        heading: string;
        id1: number;
    }[];
};

export default function Page() {
    const [contact, setContact] = useState<ContactData | null>(null);

    useEffect(() => {
        const contactRef = doc(db, "contactPage", "contact");

        const unsubscribe = onSnapshot(
            contactRef,
            (snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.data();

                    setContact({
                        address: data.address ?? "",
                        email: data.email ?? "",
                        phone: data.phone ?? "",
                        hero: data.hero ?? {
                            description: "",
                            imageUrl: "",
                            title: "",
                        },
                        quotes: data.quotes ?? [],
                    });
                }
            },
            (error) => {
                console.error("Error fetching contact page:", error);
            }
        );

        return () => unsubscribe();
    }, []);

    if (!contact) {
        return null;
    }

    return (
        <>
            <PageHero
                page_title={contact.hero.title}
                description={contact.hero.description}
                image={contact.hero.imageUrl}
            />

            <ContactPage
                address={contact.address}
                email={contact.email}
                phone={contact.phone}
                quotes={contact.quotes}
            />
        </>
    );
}