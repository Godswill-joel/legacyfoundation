import type { Metadata } from "next";
import Nav from "../components/pages/navbar";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/pages/footer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto-family",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "legacy foundation ",
  description: "Patrick & grace legacy foundation",
};

export default async function RootLayout({
  children,
}: LayoutProps<"/">) {
  const contactRef = doc(db, "contactPage", "contact");
  const contactSnapshot = await getDoc(contactRef);

  const contact = contactSnapshot.exists()
    ? contactSnapshot.data()
    : {
        address: "",
        email: "",
        phone: "",
      };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${roboto.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav
          address={contact.contact.address ?? ""}
          email={contact.contact.email ?? ""}
          phone={contact.contact.phone ?? ""}
        />

        {children}

        <Footer
          address={contact.contact.address ?? ""}
          email={contact.contact.email ?? ""}
          phone={contact.contact.phone ?? ""}
        />
      </body>
    </html>
  );
}
