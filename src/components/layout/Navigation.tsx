"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";
import content from "@/utils/content.json";
import SVG from "react-inlinesvg";

export default function MobileNav() {
  const pathname = usePathname();
  const { navigation } = content;
  const [color, setColor] = useState(false);
  const [open, setOpen] = useState(false);

  function changeColor() {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      // Optional: Add a threshold (e.g., 10px) to prevent flickering
      if (
        direction !== scrollDirection &&
        Math.abs(scrollY - lastScrollY) > 10
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx(
        "fixed top-0 left-0 right-0 py-6 z-50 transition-all duration-500",
        color
          ? "bg-white dark:bg-black"
          : "lg:bg-transparent lg:dark:bg-transparent dark:bg-black bg-white",
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            className="relative z-50 text-2xl font-bold font-poppins"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SVG
              src="/svg/logo.svg"
              className="w-auto lg:h-10 h-6 fill-white"
            />
          </motion.a>

          <ul
            className={`items-center hidden gap-8 lg:flex ${
              pathname === "/" ||
              pathname === "/licensing" ||
              pathname === "/contact"
                ? "ml-70"
                : "ml-0"
            }`}
          >
            {navigation.items.slice(0, -1).map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <a
                  href={link.href}
                  className={clsx(
                    "block font-semibold text-xl mt-2 py-4 md:py-0 border-b border-gray-200 md:border-transparent text-black dark:text-white animation-border"
                  )}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="/contact"
            className="hidden lg:flex ranimation-border font-semibold text-xl mt-2 py-4 md:py-0 text-black dark:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Create
          </motion.a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="relative z-50 flex flex-col items-center justify-center w-10 h-10 lg:hidden"
          >
            <span
              className={clsx(
                "block h-0.5 w-6 dark:bg-white bg-black transition-all duration-300",
                open ? "rotate-45 translate-y-1.25" : ""
              )}
            />
            <span
              className={clsx(
                "block h-0.5 w-6 dark:bg-white bg-black transition-all duration-300 mt-1.5",
                open ? "opacity-0 scale-0" : ""
              )}
            />
            <span
              className={clsx(
                "block h-0.5 w-6 dark:bg-white bg-black transition-all duration-300 mt-1.5",
                open ? "-rotate-45 -translate-y-1.75" : ""
              )}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed w-full top-0 h-screen z-30 dark:bg-black bg-white backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navigation.items.slice(0, -1).map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={clsx(
                    "text-3xl dark:text-white text-black font-bold font-poppins tracking-wide transition-colors"
                  )}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="/contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-3xl dark:text-white text-black font-bold font-poppins tracking-wide transition-colors"
              >
                Let&apos;s Create
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
