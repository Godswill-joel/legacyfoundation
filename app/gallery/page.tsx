"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Expand, Images, X, Loader2 } from "lucide-react";
import PageHero from "@/components/pages/pageHero";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import aboutimg from "@/public/aboutbg.jpg";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

type GalleryImage = {
  id: string;
  src: string;
  name: string;
  categoryIds: Array<string | number>;
  status: "published" | "draft";
};

type GalleryCategory = {
  id: string;
  name: string;
};

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [categories, setCategories] = useState<GalleryCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] =
    useState<GalleryImage | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const galleryRef = collection(db, "galleryImages");
    const categoriesRef = collection(db, "galleryCategories");

    const unsubscribeImages = onSnapshot(
      galleryRef,
      (snapshot) => {
        const images = snapshot.docs
          .map((doc) => {
            const data = doc.data();

            return {
              id: data.id ?? doc.id,
              src: data.src ?? "",
              name: data.name ?? "",
              categoryIds: Array.isArray(data.categoryIds)
                ? data.categoryIds
                : [],
              status: data.status ?? "draft",
            };
          })
          .filter(
            (image) => image.status === "published"
          );

        setGalleryImages(images);
      },
      (error) => {
        console.error(
          "Error fetching gallery images:",
          error
        );
      }
    );

    const unsubscribeCategories = onSnapshot(
      categoriesRef,
      (snapshot) => {
        const loadedCategories = snapshot.docs.map(
          (doc) => {
            const data = doc.data();

            return {
              id: doc.id,
              name: data.name ?? doc.id,
            };
          }
        );

        setCategories(loadedCategories);
      },
      (error) => {
        console.error(
          "Error fetching gallery categories:",
          error
        );
      }
    );

    return () => {
      unsubscribeImages();
      unsubscribeCategories();
    };
  }, []);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) =>
          image.categoryIds.some(
            (id) => String(id) === activeCategory
          )
        );

  useEffect(() => {
    if (selectedImage) {
      setImageLoaded(false);
    }
  }, [selectedImage]);

  return (
    <section>
      <PageHero
        page_title="gallery Us"
        description="Empowering lives, preserving our heritage, and creating opportunities for children, young people, and communities to build a better future."
        image={aboutimg}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
  layout
  className="grid grid-cols-3 gap-5"
>
  <AnimatePresence mode="popLayout">
    {filteredImages.map((image, index) => (
      <motion.div
        layout
        key={image.id}
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
        }}
        transition={{
          duration: 0.4,
          delay: index * 0.05,
        }}
        className={`group relative cursor-pointer overflow-hidden rounded-3xl bg-gray-200 shadow-sm ${
          index === 0
            ? "col-span-2 row-span-2"
            : ""
        }`}
        onClick={() => setSelectedImage(image)}
      >
        <div
          className={
            index === 0
              ? "relative h-full min-h-125"
              : "relative h-75"
          }
        >
          <Image
            src={image.src}
            alt={image.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

          <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-[-10px] items-center justify-center rounded-full bg-white/90 text-[#084236] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <Expand size={18} />
          </div>
        </div>
      </motion.div>
    ))}
  </AnimatePresence>
</motion.div>


        {filteredImages.length === 0 && (
          <div className="py-20 text-center">
            <Images
              className="mx-auto mb-4 text-muted-foreground"
              size={45}
            />

            <h3 className="text-xl font-semibold text-[#084236]">
              No images found
            </h3>

            <p className="mt-2 text-muted-foreground">
              Try selecting another category.
            </p>
          </div>
        )}
      </section>

      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => {
          if (!open) setSelectedImage(null);
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="flex h-fit w-fit max-w-[95vw] max-h-[90vh] items-center justify-center border-none bg-black/95 p-2 sm:p-3"
        >
          {selectedImage && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="relative flex items-center justify-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
                className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#084236] shadow-lg transition hover:scale-105"
              >
                <X size={18} />
              </button>

              {!imageLoaded && (
                <div className="flex h-[40vh] w-[40vw] items-center justify-center">
                  <Loader2 className="animate-spin text-white/70" size={32} />
                </div>
              )}

  
              <img
                src={selectedImage.src}
                alt={selectedImage.name}
                onLoad={() => setImageLoaded(true)}
                className={`max-h-[86vh] max-w-[90vw] w-auto h-auto rounded-lg object-contain transition-opacity duration-300 ${
                  imageLoaded ? "opacity-100" : "absolute opacity-0"
                }`}
              />
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}