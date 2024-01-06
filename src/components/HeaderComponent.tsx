"use client";

import React, { useState } from "react";
import texts from "@/messages/es.json";
import Image from "next/image";
import { ThemeButton, themeIndex, themeSchema } from "@/types/types";

import { motion, AnimatePresence } from "framer-motion";

const HeaderComponent: React.FC = () => {
  const text = texts.layout.header;
  const [themeIsActive, setThemeIsActive] = useState<ThemeButton>(false);
  const [themeIndex, setThemeIndex] = useState<themeIndex>(0);

  const handleTheme = (theme: themeSchema, index: number) => {
    console.log(theme.title);
    setThemeIndex(index);
    setThemeIsActive(null);
  };

  return (
    <header className="w-full h-auto fixed z-20 backdrop-blur-sm bg-transparent">
      <div className="text-white container mx-auto max-w-3xl px-12 py-5 flex items-center justify-between">
        <Image src={text.logo} alt="nico" width={24} height={24} />

        <button
          className="hover:bg-white/10 p-1.5 rounded-md transition-all relative"
          onClick={() => setThemeIsActive(!themeIsActive)}
        >
          <Image
            src={text.themeButton[themeIndex].icon}
            alt={text.themeButton[themeIndex].title}
            width={24}
            height={24}
          />

          <AnimatePresence>
            {themeIsActive && (
              <motion.ul
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="w-52 absolute -left-44 z-10 lg:left-0 top-12 flex flex-col items-start gap-1 bg-black border border-white/10 rounded-md px-3 py-5"
              >
                {text.themeButton.map((theme, index) => (
                  <li
                    key={theme.id}
                    className="hover:bg-white/10 transition-all w-full flex items-center gap-3 px-3 py-2 rounded-md"
                    onClick={() => handleTheme(theme, index)}
                  >
                    <Image
                      src={theme.icon}
                      alt={theme.title}
                      width={20}
                      height={20}
                    />{" "}
                    <span>{theme.title}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;
