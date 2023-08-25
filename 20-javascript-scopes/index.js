// Fonksiyonlar kendi scope alanlarını oluşturur.
// var ile if block içi oluşturmaz.
// let ve const ile block içi scope oluşumunu sağlayailiriz.

let kullanici = "global scope : hamza"

function isimYazdir(){
var kullanici = "fonksiyon scope : hamza"
console.log(kullanici);
}

if(true){
let kullanici = "if scope : yasin";
console.log(kullanici);
}

console.log(kullanici);