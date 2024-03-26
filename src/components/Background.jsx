"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Background({mobile , tablet, desktop} ) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className=" fixed h-screen w-screen top-0 left-0 z-0"
    >
      <picture>
        <source
          srcset={desktop}
          media="(min-width: 1200px)"
        />
        <source
          srcset={tablet}
          media="(min-width: 768px)"
        />
        <Image
          src={mobile}
          fill
          objectFit="cover"
          alt=""
        />
      </picture>
    </motion.div>
  );
}
