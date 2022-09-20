// IIFE funksiyasında ['leila', 'turkan', 'roman', 'yusif'] massivini forEach metodu ilə yaz.
//  Dəyərlərin qarşısında indeks nömrələri də olsun.
let list = ["leila", "turkan", "roman", "yusif"];
list.forEach(function(value, i) {
  console.log(i + 1 + "." + value);
});
