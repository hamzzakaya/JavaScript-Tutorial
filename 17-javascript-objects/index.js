//OBJELER KEY-->VALUE OLARAK YAZILIR

let customer = {
    "ad" : "hamza", // burada ad kısmı 'key' hamza kısmı ise 'value'
    "soyad" : "KAYA",
    "sehir" : "Kütahya",
    "yas" : 29,
    "product" : ["car", "pc", "phone"],
    "adet" : { "telefon":"ıphone",
                "piece":10 }

}
console.log(customer);// sonuç Object ad: "hamza" [[Prototype]]: Object yani 
// objelerin typeOfu objecttir arraylerinde öyle
console.log(customer.ad); // sonuç hamza
console.log(customer.soyad); // sonuç KAYA
console.log(customer.sehir); // sonuç Kütahya
console.log(customer.yas); // sonuç 29
console.log(customer.product); // sonuç ['car', 'pc', 'phone']
console.log(customer.adet.piece); // sonuç 10 dur. customerin içindeki adete ordan pieceye girdik gibi gibi...




let urunler = [
{
    "urunAdi" : "apple",
    "fiyatı" : 100
},

{
"urunAdi": "samsung",
"fiyatı" : 80

}
]
console.log(urunler[1].fiyatı); // burada bakın urunlerdeki 1. ürün yani samsungun fiyatını konsola bastık yani sonuç 80. sıfır bir iki diye devam eder...