let products = ["apple", "samsung", "huawei"]
let result;
result = products.length// sonuç 2
//result = products.toString()// stringe çevirdik
console.log(result); // sonuç apple,samsung


// JOIN
result = products.join("")
console.log(result); // burada aradaki virgülü kaldırıp istediğimizi koyabiliriz. Sonuç applesamsunghuawei


//shift array başı elemanı çıkarır
result = products.shift()
console.log(result);// burada sonuç apple. Shift burada sıfırıncı elemanı yani samsungu sildi
console.log(products);


//pop array sonu elemanı çıkarır
result = products.pop()
console.log(products);// burada sonu. samsung çıkar yukarda apple olan yani 1. elemanı silmiştik şimdi sonuncu elemanı sildik yani sonuç sadece samsung kaldı


//push array sonu bişey ekler
result = products.push("xiaomi")
console.log(products); // burada sonuç ['samsung', 'xiaomi'] push sona ekler


//unshift array başına bişey ekler
result = products.unshift("vestel")
console.log(products); // sonuç ['vestel', 'samsung', 'xiaomi'] unshift  başa ekler



// concat arrayleri birleştirir
let urunler1 = ["asus", "apple"];
let urunler2 = ["dell", "casper"];
let urunler3 = ["acer", "vestel"];
result = urunler1.concat(urunler2, urunler3)
console.log(result); // sonuç ['asus', 'apple', 'dell', 'casper', 'acer', 'vestel']


//splice

/*result = urunler1.splice(0, 0, urunler2)
console.log(urunler1);*/ // sonuç [["dell", "casper"], "asus", "apple"]


/*result = urunler1.splice(0, 0, "elma")
console.log(urunler1);*/ // sonuç ['elma', 'asus', 'apple']

result = urunler1.splice(0, 1) // burada sıfırdan başla 1 tane eleman sil demek
console.log(urunler1);// sonuç ['apple']dur. asusu sildi
console.log(result);// sonuç ['asus'] dur. sildiğini resulta atıyor.