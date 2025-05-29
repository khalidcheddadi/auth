import { NUM_PARTICLES } from "./Constant";

export const itemsConstant = Array.from({ length: NUM_PARTICLES }, (_, i) => ({
      id: i,
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
      scale: Math.random() * 1 + 0.5,
      rotate: Math.random() * 360,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
      type: Math.random() > 0.5 ? "🎁" : "✨",
    }));

  
export const ContainerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };


export const ItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };


export const InputVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const ButtonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
};