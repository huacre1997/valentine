import { appConfig } from "./config";
import { Variants } from "framer-motion";

export const screenVariants = appConfig.animationEnabled
  ? {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    }
  : {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      exit: { opacity: 1 },
    };

export const messageVariants = appConfig.animationEnabled
  ? {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
    }
  : {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
    };

export const iconVariants = appConfig.animationEnabled
  ? {
      initial: { scale: 0, opacity: 0 },
      animate: { scale: [1, 1.2, 1], opacity: [1, 1, 1] },
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
      },
    }
  : {
      initial: { scale: 1, opacity: 1 }, // 👈 Mantener valores válidos sin animación
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0 }, // 👈 Evitar `undefined`, usando una duración de 0
    };

export const getButtonVariants = (index: number): Variants =>
  appConfig.animationEnabled
    ? {
        initial: { y: 0 },
        jumping: {
          y: [0, -10, 0],
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 2,
            delay: index * 0.2, // Agregamos el delay dinámico
          },
        },
        hovered: {
          scale: 1.1,
          y: 0,
          transition: { duration: 0.2 },
        },
      }
    : {};
