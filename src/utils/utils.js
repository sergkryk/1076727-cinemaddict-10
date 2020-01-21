export const getRandomNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

export const getRandomBoolean = () => Math.random() > 0.5;
