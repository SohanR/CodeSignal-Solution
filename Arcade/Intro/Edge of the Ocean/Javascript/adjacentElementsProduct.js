function adjacentElementsProduct(inputArray) {
  var a = inputArray.length - 1;
  var p = -1000;
  var x = 0;
  var y = 0;

  for (var i = 0; i < a; i++) {
    x = inputArray[i];
    y = inputArray[i + 1];

    if (x * y > p) {
      p = x * y;
    }
  }
  return p;
}
