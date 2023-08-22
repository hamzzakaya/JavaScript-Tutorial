//TERNARY OPERATÖRÜ


const userName = "hamza kaya";
const password = '123456';

/*
if(password.length > 7){

    console.log("giriş yapabilirsiniz")
}else {
    console.log("giriş yapamazsın");
}
 // burada sonuç giriş yapamazsın basar*/





 //**Ternary operatörü if else nin tek satırla yazılmasını sağlar  */

 password > 7 && console.log("giriş yapabilirsiniz") //sonuç giriş yapabilirsiniz basar


 password > 7 ? console.log("giriş yapabilirsiniz") : console.log("giriş yapamazsın"); // sonuç giriş yapabilirsiniz basar

 // yani "?" if ":" ise else gibidir.

 userName.length>9 ? console.log("doğru") : console.log("yanlış");
 // burada sonuç doğru olarak konsola basar çünki userName 10 karakterli yani 9 dan büyük 