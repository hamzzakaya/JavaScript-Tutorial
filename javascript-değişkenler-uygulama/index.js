/* öğrenci bilgileri

1-hamza kaya
doğum tarihi:1994
fizik notları: 100,90,10

2-hilal kaya
doğum tarihi:1995
fizik notları: 60,30,50

geçer not:45

program şartları:
1- öğrenci yaşlarının hesaplanması
2-öğrenci ders ortalaması hesaplanması
3-öğrencilerin dersten geçip geçemediğinin hesaplanması
*/

let suankiYil=new Date().getFullYear();//--> burada yazdığımız bu komut o anın yılını verir elimizle değiştirmemize gerek yok...
let ogr1="hamza kaya";
let ogr1DogumYili = 1994
let ogr1Yas = suankiYil - ogr1DogumYili

let ogr1DersNot1 = 100;
let ogr1DersNot2 = 90;
let ogr1DersNot3 = 10;
let ogr1DersNotOrt = (ogr1DersNot1 + ogr1DersNot2 + ogr1DersNot3) / 3

console.log(ogr1Yas); //---> burada konsol sonucu 29 verir
console.log(ogr1DersNotOrt);//--> burada konsol sırasıyla değerleri çağırır yani (100+90+10)/3 yapar konsola 66,666666 sonucunu basar

let ogr2="hilal kaya";
let ogr2DogumYili = 1995;
let ogr2Yas = suankiYil - ogr2DogumYili
console.log(ogr2Yas);//--> burada konsol sonucu 28 verir

let ogr2DersNot1 = 60;
let ogr2DersNot2 = 30;
let ogr2DersNot3 = 50;
let ogr2DersNotOrt = (ogr2DersNot1 + ogr2DersNot2 + ogr2DersNot3)/3
console.log(ogr2DersNotOrt);//--> burada sonuç 46,6666 olarak konsola basar


let gecmeNotu = 45;//başka zaman geçme notu diyelimki 60 olursa ozaman burdaki değeri 60 yaparız ve ikinci öğrenci false olur
let ogrDurum = ogr1DersNotOrt > gecmeNotu
console.log(ogrDurum);//--> burada aslında if else kullanarak yapsak daha hoş olur ve if... koşul doğru ise mesela geçti false ise kaldı yazdırabiliriz ama şimdilik bunla idare et bakalım... burada sonuç true basılır...

 let ogr2Durum= ogr2DersNotOrt > gecmeNotu
 console.log(ogr2Durum);// sonuç true


 console.log("1. öğrenci geçme durumu",ogrDurum)//sonuç:1.öğrenci geçme durumu true
 console.log("2. öğrenci geçme durumu",ogr2Durum)//sonuç:2.öğrenci geçme durumu true

