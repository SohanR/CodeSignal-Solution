function allLongestStrings(inputArray) {
  let largestLength = inputArray[0].length;
  for (let i = 0; i < inputArray.length; i++) {
    if (largestLength < inputArray[i].length) {
      largestLength = inputArray[i].length;
    }
  }

  inputArray = inputArray.filter((word) => {
    return word.length === largestLength;
  });

  return inputArray;
}
