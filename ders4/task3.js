// Bir obyekt yarat və onu funksiyaya parametr olaraq ötür. Funksiya obyektin içindəki məlumatları for in ilə yoxlasın.
//  Əgər obyekin "react" adında bir dəyəri varsa, "Success", yoxdursa "Error" yazılsın.

let obj = {
  a1: "Test1",
  a2: "test2",
  a3: "test3",
  a4: "react"
};

function check(obj) {
  let netice = false;

  for (let key in obj) {
    if (obj[key] == "react") {
      netice = true;
      break;
    }
  }

  netice ? console.log("success") : console.log("error");
}

// for (let key in obj) {
//   console.log(obj[key]);
// }

check(obj);
