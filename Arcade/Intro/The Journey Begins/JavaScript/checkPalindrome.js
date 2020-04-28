function checkPalindrome(inputString) {
  var start, end;

  start = 0;
  end = inputString.length - 1;

  while (start < end) {
    if (inputString[start++] != inputString[end--]) {
      return false;
    }
  }
  return true;
}
