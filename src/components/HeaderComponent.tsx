"use client";

import React from "react";
import texts from "@/messages/es.json";
import Image from "next/image";

const HeaderComponent: React.FC = () => {
  const text = texts.layout.header;

  return (
    <header className="w-full h-auto fixed z-20 backdrop-blur-sm bg-transparent hover:border-b hover:border-white/10">
      <div className="text-white container mx-auto max-w-3xl px-12 py-5">
        <Image src={text.logo} alt="nico" width={24} height={24} />
      </div>
    </header>
  );
};

export default HeaderComponent;
