function getGrade(s1, s2, s3) {
  // Code here
  let cavab = "";
  let n = 3;
  let sum = (s1 + s2 + s3) / n;
  if (s1 < 0 || s2 < 0 || s3 < 0) {
    console.log("kod sehvdir");
  } else {
    if (sum >= 90 && sum <= 100) {
      cavab = "A";
    } else if (sum >= 80 && sum < 90) {
      cavab = "B";
    } else if (sum >= 70 && sum < 80) {
      cavab = "C";
    } else if (sum >= 60 && sum < 70) {
      cavab = "D";
    } else if (sum >= 0 && sum < 60) {
      cavab = "F";
    }
  }

  return cavab;
  // console.log(cavab);
}

getGrade(100, -100, 80);
