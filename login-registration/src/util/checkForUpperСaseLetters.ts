const checkForUpperСaseLetters = (string: string) => {
  let arr_EN = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let isContain = false;
  string.split("").forEach((item) => {
    if (arr_EN.includes(item)) {
      isContain = true;
    }
  });
  return isContain;
};

export default checkForUpperСaseLetters;
