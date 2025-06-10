import { motion } from "framer-motion";
import tw from "tailwind-styled-components";

export const MainTitle = tw(motion.h2)`
  text-6xl
  font-black
  text-black
  font-normal
  mb-6
  relative
  z-10
  w-full
  text-center

  max-sm:text-2xl
  max-lg:text-4xl
`;

export const MainSubText = tw(motion.p)`
  font-normal
  text-2xl
  text-mainBlack
  text-center

  max-md:text-base
  max-lg:text-xl
`;