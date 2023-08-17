//ŞİMDİLİK GÖRECEĞİMİZ DEĞİŞKEN TİPLERİ:
                
// 1-STRİNG
// 2-NUMBER
// 3-BOOLEAN
// 4-UNDEFINED


// 1-STRİNG VE NUMBER KONUSU


let ogrenciIsmi = "hamza kaya";
console.log(typeof ogrenciIsmi);

//burada tırnak içine yazdığımız kısım string değişken türüdür.Bunun tipini öğrenmek istiyorsak 'typeof' yazıp konsola bu şekilde bastırırsak anlarız
//yani bunun sonucunda konsola hamza kaya basmaz sonuç string basar...


let ogrenciYasi = "29";
console.log(typeof ogrenciYasi);
//burda tırnak içinde sayı olmuş olabilir ve bu sebeple değişken tipini string değilde number zannediyor olabilirsiniz ama tırnak içinde yazdığına dikkat edin bu işlemin sonucunda konsol bize string basar


let ogrenciNumarasi = 29;
console.log(typeof ogrenciNumarasi);
//burada artık değişkenimizi tırnaksız tanımladık ve sonuç olarak konsola number basar...


////////////////////////////////////////////////////////


//şimdi size güzel bir toplama hatası örneği göstereceğim
let sayi1 = "10";
let sayi2 = "20";
let toplam = sayi1 + sayi2;
console.log(toplam);

//burada işlemi konsola bastığımızda 30 değerini göreceğinizi zannediyor olabilirsiniz ama bu işlemin sonu 1020 dir.çünki değişkenler tırnak içinde yani string bu sebeple 10 ve 20 yi yanyana yazıp 1020 sonucunu bize verir. peki şimdi aşşada değişkenleri tırnak içine aldığımız halde toplama işlemini doğru şekilde yapalım...

let sayi3= "10";
let sayi4= "20";
let toplama= Number(sayi3) + Number(sayi4);
console.log(toplama);
//burada değişkenler string olmasına rağmen Number komutunu başlarına koyarak bu stringleri number değişkenine çevirdik ve toplama işlemi yapabildik
//sonuç konsola 30 basar



//eğer değişkenlerimiz number ama biz bunları stringe çevirip yanyana yazdırmak istersekte aşşağıdaki şekilde yapacağız...
let sayi5=10;
let sayi6=20;
let toplams= sayi5.toString() + sayi6.toString()
console.log(toplams);
// toString() yapısı ile number değişkenlerini stringe çevirip konsola 1020 şekilde bastırdık...

/////////////////////////////////////////////////////////////////////////


//ŞİMDİ BOOLEAN KONUSUNA GEÇELİM

let sayi7=10;
let sayi8=20;
console.log(sayi7 > sayi8); 
//burada işlemin sonucu false döner buradaki true ya da false değişken tipi booleandır.
let sayi9=10;
let sayi10=20;
console.log(typeof false); //---> yani buradaki false sonucunun tipini typeof diye arattığımızda burada konsola sonuç olarak bize boolean basar...


// ŞİMDİ UNDEFINED KONUSUNA GEÇELİM

let ogrenciAdresi;
console.log(typeof ogrenciAdresi);
//burada konsola undefined basar yani aslında şu demek evet bir ogrenciAdresi için bir yer ayırdı RAMe sakladı bunu ama daha tanımlanmadı...





