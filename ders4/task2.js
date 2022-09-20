// Login simuliyasiya et. Bir obyektin olsun, hansı ki, içində admin istifadəçi adı və şifrəsi var.
//  Bir funksiya yarat. Funksiya parametr olaraq admin məlumatları alsın. Hansı məlumat səhvdirsə konsola ekranına yazılsın.
//   Əgər bütün məlumatlar düzdürsə "uğurlu giriş" yazılsın.

let arr = {
  user: "gunelh",
  password: 123456
};

let username = "";
function checkLogin(userName, password) {
  if (userName == arr.user && password == arr.password) {
    console.log("Success");
  } else {
    console.log("login ve ya parol duzgun deyil");
  }
}

checkLogin("gunelh", 123456);
