function makeArrayConsecutive2(statues) {
  var a = statues.length;
  var diff = 0;
  var sum = 0;

  statues.sort(function (a, b) {
    return a - b;
  });

  for (var i = a - 1; i > 0; i--) {
    sum += statues[i] - statues[i - 1] - 1;
  }
  return sum;
}
