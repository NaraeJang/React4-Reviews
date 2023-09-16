const checkNumber = (number) => {
  if (number > people.length - 1) {
    return 0;
  }
  if (number < 0) {
    return people.length - 1;
  }

  return number;
};

const nextPerson = () => {
  setIndex((currentIndex) => {
    const newIndex = currentIndex + 1;
    return checkNumber(newIndex);
  });
};
const prevPerson = () => {
  setIndex((currentIndex) => {
    const newIndex = currentIndex - 1;
    return checkNumber(newIndex);
  });
};

const randomPerson = () => {
  let randomNumber = Math.floor(Math.random() * people.length);

  if (randomNumber === index) {
    randomNumber = index + 1;
  }

  setIndex(randomNumber);
};
