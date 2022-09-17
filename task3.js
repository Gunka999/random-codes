function index(array, n) {
  let x = array[n];
  let y = 1;
  //   console.log(x);

  if (n > 0) {
    if (x == undefined) {
      //   console.log(y);
    } else {
      y = Math.pow(x, n);
      //   console.log(y);
    }
    // console.log(y);
    return y;
  } else {
    return "n duzgun qeyd olunmayib";
    console.log("n duzgun qeyd olunmayib.");
  }
}

index([1, -2, 5], 2);
