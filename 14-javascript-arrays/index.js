/*const urun1 = "samsung";
const urun2 = "apple";
const urun3 = "huawei";*/
// bunları tek tek böyle yazdırmaktansa array içinde yazdıralım.

const urunler = ["samsung", "apple", "huawei"]
console.log(urunler); // sonuç ['samsung', 'apple', 'huawei']
console.log(urunler[0]);// sonuç string şeklinde samsung



const fıyatlar = [10, 20, 30];
console.log(fıyatlar);// sonuç number olarak 10, 20, 30 dur.


// array içine hem string hem number yazılabilir
const urun1 = ["apple", 10]
console.log(urun1);//  sonuç ['apple', 10]


//array içinde array yazılabilir
const urun2 = ["apple", 10, ["samsung" , 20]]
console.log(urun2);// sonuç ['apple', 10, Array(2)]
console.log(urun2[2]);// sonuç ['samsung', 20] 0-1-2 diye gidiyor.
console.log(urun2[2][0]); // sonuç samsung 2.eleman array2 oluyor ve bu array2 deki sıfırıncı elemanı soruyor buda samsungtur.

console.log(urunler[1] + fıyatlar[2]);// sonuç apple30 

console.log(`${urunler[1]} ${fıyatlar[2]}`);//sonuç apple 30 bakın burada dolar işaretleri arasında boşluk olduğu için boşlukta koydu
