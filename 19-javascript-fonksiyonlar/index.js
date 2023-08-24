
///////

function sayilar (sayi1,sayi2){
console.log(sayi1,sayi2); // sonuç 10 20
}
sayilar(10,20)

////////


///////

function sayiToplami (sayi2,sayi3){
    let toplam = sayi2 + sayi3;
    console.log(toplam); // sonuç 30.
}
sayiToplami(10,20)


///////



//////

function sayiToplami (sayi2,sayi3){
    let toplam = sayi2 + sayi3;
    console.log(toplam); // sonuç 30 ve 70
}
sayiToplami(10,20)
sayiToplami(30,40)


/////GELİŞMİŞ TOPLAMI FONKSİYONU

let toplam = 0;
function sayıtoplamı(...sayılar){
    for(let sayı of sayılar){
        toplam += sayı
    }
}
sayıtoplamı(10,20,30,40)
console.log(toplam);


//////////////////////////////////
///YAŞ HESAPLAMA

function yasHesapla(dogumyili){
let yil = new Date().getFullYear();
console.log(yil-dogumyili); // sonuç 29

}
yasHesapla(1994) 

/////////////////////////////////

//////////////////////////////
function yasHesapla(dogumyili){
    
    console.log(new Date().getFullYear()-dogumyili); // sonuç 29
    
    }
    yasHesapla(1994) 

//////////////////////////////////////////

//////////////////////////////////////////

function yasHesapla1(dogumyili1){
return new Date().getFullYear()-dogumyili1

}
const hesapla = yasHesapla1(1994);
console.log(hesapla); // sonuç 29