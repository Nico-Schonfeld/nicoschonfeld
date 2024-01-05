"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import texts from "@/messages/es.json";
import { LoginPage } from "@/types/types";

const Links = () => {
  const [loginPage, setLoginPage] = useState<LoginPage>(false);

  const text = texts.linksNS;

  useEffect(() => {
    setTimeout(() => {
      setLoginPage(true);
    }, 1500);
  }, []);

  return (
    <AnimatePresence>
      <main className="w-full h-screen">
        <div className="absolute h-full w-full bg-[radial-gradient(#00000020_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="relative z-10 w-full h-full container mx-auto p-5 flex items-center gap-5 justify-center flex-col">
          <motion.div
            initial={{ opacity: 1, y: 190, scale: 0 }}
            animate={
              loginPage
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 1, y: 190, scale: 1 }
            }
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Image
              src={text.pj}
              alt="PhotoProfile"
              width={80}
              height={80}
              className="rounded-full"
            />
          </motion.div>

          <Link href="/">
            <motion.h3
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="font-bold text-3xl mb-5 text-center"
            >
              {text.title}
            </motion.h3>
          </Link>

          {text.socialMedia?.map((dato) => (
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              key={dato?.id}
            >
              <Link
                href={dato?.path}
                target="_blank"
                className="bg-black hover:bg-gray-900 text-white font-medium w-80 rounded-md py-1.5 flex items-center justify-center transition-all"
              >
                {dato?.title}
              </Link>
            </motion.span>
          ))}
        </div>
      </main>
    </AnimatePresence>
  );
};

export default Links;
