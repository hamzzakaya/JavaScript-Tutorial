let ad = "hamza";
let soyad = "KAYA";
//let komutuda const gibi bir değişkendir burada ad isminde bir fonksiyon tanımladık ve bunada hamza diye bir string tanımladık yani ad fonksiyonu hamza strgingi oldu 



console.log(ad);
//konsola yazdırınca sonuç hamza bastırır...



console.log(ad+soyad);
//sonuç hamzaKAYA



console.log(ad+" "+soyad)
//sonuç hamza KAYA çünki araya string ile yani çift tırnak ile boşluk verdik 
//böylelikle stringin çift tırnaklar içine yazıldığınada değinmiş olduk...




//ŞİMDİ SİZE GÜZEL BİR ÖRNEK YAPACAĞIM ÖRNEĞİN BİR OKUL MÜDÜRÜNÜN İSMİ HAMZA OLSUN YILLAR SONRA MÜDÜR DEĞİŞEBİLİR BUNU EN BAŞTAN DEĞİŞKENLER İÇİNE SOKARSAK İLERİDE SÜREKLİ OKUL MÜDÜRÜNÜN İSMİNİ YAZDIĞIMIZ KODLARI TEKRAR TEKRAR DEĞİŞTİRMEYİZ BUNUN YERİNE BUNU MÜDÜR ADINI BİR DEĞİŞKENE ATAYALIM
let müdürAdı="hamza"; //burada aslında türkçe karakter kullanmamalıyız siz öğrenin diye kullandım
console.log("Müdür Adı:"+ müdürAdı);
//burada sonuç Müdür Adı:hamza olarak konsola basar fakat mesela müdür gitti ismi hilal oldu ozaman sadece "hilal" olarak değiştirmemiz yeterli çünki biz müdür adını müdürAdı değişkenine atadık
// yani eğer yeni müdür hamza değilde hilalse "hamza" stringi içerisindeki "hilal" olarak değiştireceğiz böylelikle sonuç Müdür Adı:hilal olur



//BAŞKA GÜZEL BİR ÖRNEK YAPALIM
let müdür= "hamza";
let müdürYardımcısı= "hilal";

console.log( "Sunum Yapacak Kişiler:",müdür,müdürYardımcısı);
// burada konsola sonuç olarak hamza hilal basılır...





//mesela mesela bir muhasebe örneği yapalım mı ?
let maaş = 11.402;
let zam = 0.3;

let zamlıMaaş = maaş+maaş*zam;
console.log("yeni maaş:",zamlıMaaş);
//maaşlar ve zam oranları her değiştiğinde tek tek girmek yerine en üstte maaş ve zam diye değişken tanımlarız sonra içerisindekiler değiştiririz.
//yani konsola yeni maaş:14.8226 basar...
//şimdi diyelimki yeni dönem başladı ve maaş artık 14.8226 oldu ama zam oranı değişti ve 0.2 oldu yukarıdaki değişkenlerin maaş kısmına 14.8226 zam kısmına ise 0.2 yazmamız yeni maaşı belirler...
