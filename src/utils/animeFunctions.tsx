
// коли екран на секції
// hero, about, btn-my-projects, 
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


  // about buttons education
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
        duration: 0.7
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
// skills, 
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
//offer-list, project-list
export const fadeInAnimationHorizontalItem = (index: number) => {
  const isEven = index % 2 === 0;

  return {
    initial: {
      opacity: 0,
      x: isEven ? 100 : -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.05 * index,
        bounce: 0.4,
        duration: 0.8
      },
    },
  };
};

