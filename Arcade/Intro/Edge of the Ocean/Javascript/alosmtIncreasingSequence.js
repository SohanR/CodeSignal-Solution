function almostIncreasingSequence(sequence) {
  var found = true;

  for (var i = 0; i < sequence.length; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      if (found) {
        found = false;
        if (
          sequence[i - 1] >= sequence[i + 1] &&
          sequence[i] >= sequence[i + 2]
        ) {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  return true;
}
