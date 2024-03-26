export const buttonVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};
export const headingVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 50,
    },
  },
};

export const boxVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.15,
      delay: 0.25,
      type: "intertia",
    },
  },
  hover: { scale: 1, duration: 0, delay: 0 },
};

export const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};
export const popinVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
      duration: 0.15,
    },
  },
  exit: { opacity: 0, scale: 0.8 },
};

export const cardVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.25,
      type: "spring",
      stiffness: 50,
    },
  },
};

export const descriptionVariants = {
  hidden: { height: "15%" },
  visible: { height: "45%" },
};

export const textVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.75 },
  },
};
