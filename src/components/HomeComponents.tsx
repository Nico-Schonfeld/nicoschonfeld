import React from "react";

import texts from "@/messages/es.json";
import Image from "next/image";
import Link from "next/link";

const HomeComponents = () => {
  const text = texts.layout.home;

  return (
    <div className="w-full h-full relative z-10 flex items-center justify-center p-20 flex-col">
      <div className="flex items-center justify-start gap-10">
        <Link href="/links">
          <Image
            src={text.photo}
            alt={text.title}
            width={150}
            height={150}
            className="rounded-full"
          />
        </Link>
        <div className="flex items-start flex-col gap-2">
          <h1 className="font-bold text-6xl">{text.title}</h1>
          <p className="max-w-[500px]">{text.text}</p>
          <div className="flex items-center gap-5 mt-2">
            {text.buttonsSocialMediaHome.map((b) => (
              <Link
                href={b.path}
                target={b.target}
                key={b.id}
                className="border-b-4 border-transparent transition-all hover:border-pink-500"
              >
                {b.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponents;
