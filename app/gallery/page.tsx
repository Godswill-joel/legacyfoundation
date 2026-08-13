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
  title: string;
  category: string;
  description: string;
};

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=85",
    title: "Learning Opens Doors",
    category: "Education",
    description:
      "Children learning together in a classroom, representing the importance of accessible and inclusive education across African communities.",

  },

  {
    id: 2,
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=85",
    title: "Every Child Deserves a Future",
    category: "Education",
    description:
      "Education programmes across Nigeria continue to focus on helping disadvantaged children return to school and improve their learning opportunities."
  },

  {
    id: 3,
    src: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=1600&q=85",
    title: "Nourishing Young Lives",
    category: "Outreach",
    description:
      "Nutrition remains an important part of child development, with programmes across West and Central Africa working to improve access to diverse and nutritious diets.",
  },

  {
    id: 4,
    src: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1600&q=85",
    title: "Community in Action",
    category: "Community",
    description:
      "Community participation is essential to creating sustainable development and ensuring that local people have a voice in the solutions affecting them."
  },

  {
    id: 5,
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=85",
    title: "Together We Can",
    category: "Community",
    description:
      "Volunteers and community members working together demonstrate how collective action can create meaningful and lasting change."
  },

  {
    id: 6,
    src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1600&q=85",
    title: "Girls With a Vision",
    category: "Empowerment",
    description:
      "Girls' education and empowerment remain critical to building healthier families, stronger communities and better economic opportunities.",
  },

  {
    id: 7,
    src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=85",
    title: "Serving Our Communities",
    category: "Outreach",
    description:
      "Community outreach brings essential information, resources and support directly to families who need them.",
  },

  {
    id: 8,
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&q=85",
    title: "Building the Next Generation",
    category: "Empowerment",
    description:
      "Young people need opportunities to develop practical skills, leadership abilities and confidence to participate fully in their communities."
  },

  {
    id: 9,
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=85",
    title: "Hope Through Education",
    category: "Education",
    description:
      "Access to quality learning can give children the knowledge, skills and confidence needed to build a better future."
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
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                  <div className="absolute left-5 top-5">
                    <Badge className="border border-white/20 bg-white/15 px-3 py-1 text-white backdrop-blur-md hover:bg-white/15">
                      {image.category}
                    </Badge>
                  </div>

                  <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-[-10px] items-center justify-center rounded-full bg-white/90 text-[#084236] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Expand size={18} />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <motion.div
                      initial={{ y: 15, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="transition-all"
                    >
                      <h3 className="text-xl font-bold">
                        {image.title}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-sm text-white/75">
                        {image.description}
                      </p>
                    </motion.div>
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
        <DialogContent
          className="
      w-[95vw] max-w-[95vw]
      overflow-hidden
      border border-white/20
      bg-beige
      p-0
      shadow-2xl
      backdrop-blur-xl
      sm:max-w-[90vw]
      lg:max-w-[88vw]
      xl:max-w-[85vw]
    "
        >
          <DialogTitle className="sr-only">
            {selectedImage?.title}
          </DialogTitle>

          {selectedImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="
          relative
          grid
          min-h-[75vh]
          grid-cols-1
          overflow-hidden
          lg:grid-cols-[1.5fr_0.7fr]
        "
            >
              <div className="absolute inset-0 -z-10">
                <Image
                  src={selectedImage.src}
                  alt=""
                  fill
                  className="object-cover blur-3xl opacity-30"
                />

                <div className="absolute inset-0 bg-black/30" />
              </div>

              <div className="relative min-h-[50vh] lg:min-h-[75vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain p-4 sm:p-6"
                />
              </div>

              <div
                className="
            relative
            flex
            flex-col
            justify-end
            border-t
            border-white/20
            bg-white/10
            p-6
            text-white
            backdrop-blur-2xl
            sm:p-10
            lg:border-l
            lg:border-t-0
          "
              >
                <Badge className="mb-5 w-fit border border-white bg-[#008000] px-4 py-2 text-white ">
                  {selectedImage.category}
                </Badge>

                <h2 className="text-lg font-bold lg:text-3xl">
                  {selectedImage.title}
                </h2>

                <div className="mt-5 h-1 w-32 rounded-full bg-white" />

                <p className="mt-6 text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                  {selectedImage.description}
                </p>

                <div className="mt-10 text-sm text-white/50">
                  {String(selectedImage.id).padStart(2, "0")} /{" "}
                  {String(galleryImages.length).padStart(2, "0")}
                </div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>


      {/* <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-5xl overflow-hidden border-none p-0">
            <DialogTitle className="sr-only">
              {selectedImage?.title}
            </DialogTitle>

            {selectedImage && (
              <div className="relative">
                <div className="relative h-[70vh] w-full">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/70 to-transparent px-6 pb-8 pt-24 text-white">
                  <Badge className="bg-[#FC9F30] text-white hover:bg-[#FC9F30]">
                    {selectedImage.category}
                  </Badge>

                  <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                    {selectedImage.title}
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm text-white/70 sm:text-base">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog> */}
    </section>
  );
}