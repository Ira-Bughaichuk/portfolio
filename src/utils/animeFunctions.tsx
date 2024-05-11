
// коли екран на секції
// hero, about, skills, my projects, 
export const fadeInAnimationHorizontal = (direction : string) => ({
    initial: {
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        bounce: 0.4,
        duration: 0.8
      },
    },
  });


  // about buttons
  export const fadeInAnimationVerticalItem = {
    initial: {
      opacity: 0,
      y: 100,
    },
    show: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 * index,
        duration: 0.8
      },
    }),
  };


  // one button
  export const fadeInAnimationVertical = {
    initial: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6
      },
    },
  };
// skills
  export const fadeInAnimationVariantsItem = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };