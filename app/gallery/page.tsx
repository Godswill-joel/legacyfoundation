"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Expand, Images } from "lucide-react";
import PageHero from '@/components/pages/pageHero';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import aboutimg from "@/public/aboutbg.jpg";

type GalleryImage = {
  id: number;
  src: string;
  category: string;
};

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=85",
    category: "Education",

  },

  {
    id: 2,
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=85",
    category: "Education",
  },

  {
    id: 3,
    src: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=1600&q=85",
    category: "Outreach",
  },

  {
    id: 4,
    src: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1600&q=85",
    category: "Community",
  },

  {
    id: 5,
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=85",
    category: "Community",
  },

  {
    id: 6,
    src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1600&q=85",
    category: "Empowerment",
  },

  {
    id: 7,
    src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=85",
    category: "Outreach",
  },

  {
    id: 8,
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&q=85",
    category: "Empowerment",
  },

  {
    id: 9,
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=85",
    category: "Education",
  },
];

const categories = [
  "All",
  "Education",
  "Community",
  "Outreach",
  "Empowerment",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] =
    useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
        (image) => image.category === activeCategory
      );

  return (
    <section>
      <PageHero
        page_title="gallery Us"
        description="Empowering lives, preserving our heritage, and creating opportunities for children, young people, and communities to build a better future."
        image={aboutimg}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={
                activeCategory === category
                  ? "default"
                  : "outline"
              }
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 transition-all duration-300 ${activeCategory === category
                ? "bg-[#084236] text-white hover:bg-[#084236]/90"
                : "border-[#084236]/20 bg-transparent text-[#084236] hover:bg-[#084236] hover:text-white"
                }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
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
                className={`group relative cursor-pointer overflow-hidden rounded-3xl bg-gray-200 shadow-sm ${index === 0
                  ? "sm:col-span-2 sm:row-span-2"
                  : ""
                  }`}
                onClick={() => setSelectedImage(image)}
              >
                <div
                  className={
                    index === 0
                      ? "relative h-95 sm:h-full sm:min-h-125"
                      : "relative h-75"
                  }
                >
                  <Image
                    src={image.src}
                    alt={image.category}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                  {/* <div className="absolute left-5 top-5">
                    <Badge className="border border-white/20 bg-white/15 px-3 py-1 text-white backdrop-blur-md hover:bg-white/15">
                      {image.category}
                    </Badge>
                  </div> */}

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
            <Images className="mx-auto mb-4 text-muted-foreground" size={45} />
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
        <DialogContent className="max-w-none sm:max-w-none w-[90vw] h-[90vh] p-6 overflow-hidden">
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full h-full overflow-hidden"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.category}
                fill
                className="object-contain"
              />
            </motion.div>
          )}
        </DialogContent>
      </Dialog>

    </section>
  );
}