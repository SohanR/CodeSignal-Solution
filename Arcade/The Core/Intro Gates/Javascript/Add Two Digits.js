function addTwoDigits(n) {
  var sum;

  for (sum = 0; (sum += n % 10), parseInt((n /= 10)); );
  return parseInt(sum);
}
