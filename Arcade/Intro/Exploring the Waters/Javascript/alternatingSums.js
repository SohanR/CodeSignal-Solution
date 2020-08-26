//https://app.codesignal.com/arcade/intro/level-4/cC5QuL9fqvZjXJsW9

function alternatingSums(a) {
  let team1 = 0;
  let team2 = 0;

  a.forEach((element, index) => {
    if (index % 2 == 0) {
      team1 += element;
    } else {
      team2 += element;
    }
  });

  return [team1, team2];
}
