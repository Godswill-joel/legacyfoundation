"use client";

import { Phone, Clock10Icon, Menu, X, Heart, MapPin, Mail } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import logo from "@/public/logo.jpeg";
import { Button } from "../ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "../ui/sheet";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Donate",
    path: "/donate",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Services",
    path: "/services",
  },
];
export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactSheetOpen, setContactSheetOpen] = useState(false);

  return (
    <>


      <div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        >
          <p className="text-sm sm:text-base">
            Save a Child&apos;s Future
          </p>

          <div className="flex items-center gap-4">
            <div className="hidden gap-4 lg:flex">
              <p className="flex items-center gap-2">
                <Clock10Icon className="h-4 w-4" />

                <span>
                  Mon - Sat 9.00 - 18.00
                </span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />

                <span>
                  (251) 235-3256
                </span>
              </p>
            </div>

            <Button className="rounded-none">
              Donate Now
            </Button>
          </div>
        </motion.div>
      </div>

      <nav className="sticky top-0 z-50 flex w-full flex-col items-center bg-white">

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="flex w-full items-center justify-between border-2 bg-white"
        >
          <motion.div
            whileHover={{
              scale: 1.04,
            }}
            transition={{
              duration: 0.2,
            }}
            className="border-r-2 p-3 sm:p-4"
          >
            <Image
              src={logo}
              alt="Patrick Osam Ntun Legacy Foundation"
              className="h-14 w-14 object-cover sm:h-20 sm:w-20"
            />
          </motion.div>

          <div className="hidden items-center gap-6 lg:flex lg:px-24">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.path}
              >
                <motion.span
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -2,
                  }}
                  className="cursor-pointer text-lg transition-colors duration-200 hover:text-[#008000]"
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </div>


          <motion.button
            type="button"
            whileTap={{
              scale: 0.9,
            }}
            onClick={() =>
              setContactSheetOpen(true)
            }
            className="hidden self-stretch items-center border-l-2 px-4 lg:flex"
            aria-label="Open foundation information"
          >
            <Menu className="h-8 w-8" />
          </motion.button>


          <motion.button
            type="button"
            whileTap={{
              scale: 0.9,
            }}
            onClick={() =>
              setMobileMenuOpen(
                !mobileMenuOpen
              )
            }
            className="flex self-stretch items-center border-l-2 px-4 lg:hidden"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <X className="h-7 w-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <Menu className="h-7 w-7" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>


        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="w-full overflow-hidden border-b-2 lg:hidden"
            >
              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <motion.span
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                      }}
                      className="block cursor-pointer border-t px-6 py-4 text-base transition-colors hover:bg-gray-50 hover:text-[#008000]"
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                ))}

                <div className="flex flex-col gap-4 border-t px-6 py-5 text-sm">
                  <p className="flex items-center gap-3">
                    <Clock10Icon className="h-4 w-4 text-[#008000]" />

                    <span>
                      Mon - Sat 9.00 - 18.00
                    </span>
                  </p>

                  <p className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-[#008000]" />

                    <a
                      href="tel:+2512353256"
                      className="transition-colors hover:text-[#008000]"
                    >
                      (251) 235-3256
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>




      <Sheet
        open={contactSheetOpen}
        onOpenChange={
          setContactSheetOpen
        }
      >
        <SheetContent
          side="left"
          className="w-[90%] max-w-md overflow-y-auto p-0 sm:w-[420px]"
        >

          <SheetHeader className="border-b p-6">
            <div className="flex items-center gap-4">

              <Image
                src={logo}
                alt="Patrick Osam Ntun Legacy Foundation"
                className="h-16 w-16 object-cover"
              />

              <div>
                <SheetTitle className="text-left text-lg">
                  Patrick Osam
                  Ntun
                  <span className="block">
                    Legacy
                    Foundation
                  </span>
                </SheetTitle>

                <SheetDescription className="mt-1 text-left">
                  Empowering lives.
                  Preserving
                  heritage.
                </SheetDescription>
              </div>

            </div>
          </SheetHeader>

          <div className="p-6">

            <div className="mb-8">

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#008000]">
                About The
                Foundation
              </p>

              <h2 className="text-2xl font-bold leading-tight">
                Making a
                Difference,
                One Life at
                a Time
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Patrick Osam
                Ntun Legacy
                Foundation is
                a non-profit
                organization
                committed to
                improving
                lives through
                education,
                youth
                empowerment,
                cultural
                preservation,
                and community
                development.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                We work to
                create
                opportunities
                for children,
                young people,
                and
                communities
                while
                preserving
                cultural
                heritage and
                supporting
                those in need.
              </p>

            </div>


            <div className="border-y py-6">

              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#008000]">
                Contact Us
              </p>

              <div className="space-y-5">

                <div className="flex gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#008000]/10 text-[#008000]">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Phone
                    </p>

                    <a
                      href="tel:+2512353256"
                      className="text-sm text-gray-600 transition-colors hover:text-[#008000]"
                    >
                      +251
                      235-3256
                    </a>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#008000]/10 text-[#008000]">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Email
                    </p>

                    <p className="text-sm text-gray-600">
                      info@patrickosamntun.org
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#008000]/10 text-[#008000]">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Address
                    </p>

                    <p className="text-sm leading-6 text-gray-600">
                      House 1,
                      Close 1,
                      Owhor
                      Chukwu
                      Street,
                      Off Aka
                      Road,
                      Rumuorlumeni,
                      Port
                      Harcourt,
                      Rivers
                      State,
                      Nigeria.
                    </p>
                  </div>

                </div>

              </div>
            </div>


            <div className="mt-8">

              <div className="flex items-center gap-3">

                <Heart className="h-5 w-5 fill-[#008000] text-[#008000]" />

                <p className="text-sm font-semibold">
                  Help us make
                  a difference
                </p>

              </div>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Your support
                can help
                provide
                education,
                food, skills,
                and
                opportunities
                to those who
                need them
                most.
              </p>

              <Button
                onClick={() =>
                  setContactSheetOpen(
                    false
                  )
                }
                className="mt-5 w-full rounded-none bg-[#008000] py-6"
              >
                Donate Now
              </Button>

            </div>

          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}