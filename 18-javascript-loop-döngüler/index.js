//DÖNGÜLER
//şimdi dögüler kullanmadan bir meyve listesi oluşturalım işimiz uzayacak ama döngüleri öğrenince bu çok basitleşcek

let meyve = ["elma", "armut","muz","portakal","karpuz"]
console.log(meyve[0]); // sonuç elma
console.log(meyve[1]); // sonuç armut
console.log(meyve[2]); // sonuç muz
console.log(meyve[3]); // portakal
console.log(meyve[4]); // karpuz
// yukardaki şekilde tek tek bu meyve listesini oluşturabiliriz ama gerek ???

for(let i=0; i<meyve.length; i++){
    console.log(meyve[i]);// burada sonuç elma
                                       // armut
                                      //  muz
                                       // portakal
                                      //  karpuz
}
// yukarıdaki meyve döngüsünde yapılmak isteneni anlatalım şimdi i değeri sıfırdan başlıyor ve gideceği değer sayısı meyve dizisinin lengthi kadar yani 0-1-2-3-4 yani 5tir. i değeri sıfırdan başlar meyvenin sıfırıncı değeri elma onu yazdırır ve sonra i 1 artar armutu yazdırır i birkere daha artar ve bir kere daha taaki meyve değişkenin length değeri bitene kadar sonuncu değeride yazdırır...





// Mesela 0'dan 100'e kadar sayıları yazdırmak için bir döngü kuralım.

for (let i = 0; i<101; i++){ //burada söylenmek istenen i'yi sıfırdan başlat sonra 1 arttır 101 den küçük mü bak devam et 1 arttır son olarak 101 e gelir 101 101 den küçük değildir yani 100 de kalır.
    console.log(i);// burada sonuç 0 ve 100 dahil bütün sayıları yazdırır
}

for( let a=5 ; a<29 ; a=a+1 ){
    console.log(a);// burada sonuç 5 dahil 28'e kadar sayıları yazdırır.
}


// i++ demek i=i+1 demektir...
/////////
for( let b=5 ; b<=29 ; b++ ){
    console.log(b);// burada sonuç 5 ve 29 dahil  sayıları yazdırır.çünki 29'dan küçük ve eşit dedik
}


/////////


for(let c=0 ; c<=10 ; c=c+2){
console.log(c);// sonuç  0,2,4,6,8,10 ikişer arttırdık
}



// DÖNGÜYLE TOPLAMA İŞLEMİ
let sayilar = [10,20,30,40]
let toplam = 0;
for(let x = 0 ; x<sayilar.length; x++){
    console.log(toplam = toplam + sayilar[x]);// burada sonuç 100dür. 10+20+30+40 = 100

    //burada toplam=toplam+sayiların kısaltması toplam += sayilardır
}

//İNDEX KISA YOLUYLA BİR DİZİ SAYI YAZDIRALIM
let numbers = [10, 20, 30, 40];
for(let k in numbers){
    console.log(numbers[k]); // sonuç 10,20,30,40
}


// döngüdeki index ile toplama
let sayilar2 = [10,20,30,40];
let toplam2 = 0;
for (let y in sayilar2){
    console.log(toplam2+=sayilar2[y]); // sonuç 100
} 


// direk sayıları alma
let sayilar3 = [10,20,30,40]
let toplam3 = 0;
for(let index of sayilar3){
    console.log(index); // sonuç 10,20,30,40
}


let sayilar4 = [10,20,30,40]
let toplam4 = 0;
for(let sayi of sayilar4){
    console.log(toplam4 += sayi); // sonuç 100
}



//object ile döngü

const user = {

"ad": "hamza",
"soyad": "kaya",
"email": "hamzakaya@gmail.com",
"yas": 29

}
console.log(user); // sonuçad: 'hamza', soyad: 'kaya', email: 'hamzakaya@gmail.com', yas: 25}

// şimdi objeyle yapalım

for (let key in user){
    console.log(user["soyad"]); // sonuç kaya
}

for (let key in user){
    console.log(user[key]) // sonuç hamza
                                 // kaya
                                 // hamzakaya@gmail.com
                                 // 25
    }


    // çoklu kullanıcı

    let users = [
{
"id":"1"    ,
"ad": "hamza",
"soyad": "kaya",
"yas": 29

},
{
"id":"2"  ,  
"ad":"hilal",
"soyad":"kaya",
"yas": 28

}
]

for(let i = 0 ; i< users.length ; i++ ){

    console.log(users[i]); 
                    // sonuç {id: '1', ad: 'hamza', soyad: 'kaya', yas: 29}
                           //{id: '2', ad: 'hilal', soyad: 'kaya', yas: 28}

    console.log(users[i].ad);// sonuç hamza hilal

 }

