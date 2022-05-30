const checkForLowerСaseLetters = (string: string) => {
  let arr_en: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let isContain = false;
  string.split("").forEach((item) => {
    if (arr_en.includes(item)) {
      isContain = true;
    }
  });
  return isContain;
};

export default checkForLowerСaseLetters;
