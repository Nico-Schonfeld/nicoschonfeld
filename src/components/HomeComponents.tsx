"use client";

import React from "react";

import texts from "@/messages/es.json";
import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

const HomeComponents = () => {
  const text = texts.layout.home;

  return (
    <div className="relative z-10 w-full h-full flex items-center justify-start flex-col gap-20 px-10">
      <div className="w-full flex items-center justify-between mt-52">
        <Link href="/links">
          <div>
            <Image
              src={text.photo}
              alt={text.name}
              width={180}
              height={180}
              className="rounded-full"
            />
          </div>
        </Link>

        <div className="flex items-start flex-col gap-2">
          <div className="flex items-center gap-3">
            <Link href="/links">
              <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 font-bold">
                {text.name}
              </h1>
            </Link>
            <span className="bg-[#101010] border border-gray-700 text-sm px-1.5 rounded-md text-gray-400">
              {text.sex}
            </span>
          </div>

          <ul className="flex items-center gap-4">
            {text.tagsMe.map((tag) => (
              <li key={tag.id} className="text-gray-400 text-sm">
                {tag.isLink ? (
                  <a
                    href={tag.to}
                    className=" hover:text-gray-50 transition-all underline flex items-center gap-1.5"
                  >
                    <Image
                      src={tag.icon}
                      alt={tag.text}
                      width={16}
                      height={16}
                    />
                    {tag.text}
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <Image
                      src={tag.icon}
                      alt={tag.text}
                      width={16}
                      height={16}
                    />
                    {tag.text}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeComponents;
