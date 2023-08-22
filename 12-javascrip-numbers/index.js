const username = 'hamza kaya';
const yas = 29;

let result;

/*

result = 29;
console.log(result);*/ // burada sonuc 29 ve tipi typeOf number


/*

result = 29;
result = Number("29")
console.log(typeof result)*/ // buradada 29 yazar ve t'p' numberdir cunki basina Number koyduk.//


/* PARSEINT
result = parseInt("29.7")
console.log(result)*/ // burada sonuc 29 dur parseInt noktadan sonrasini almaz



/* PARSEFLOAT
result = parseFloat('29.7');
console.log(result); // burada sonuç 29.7 döner parseFloat noktadan sonrasınıda alır.*/



/* NaN
result = isNaN("a29");
console.log(result)*/ // burada sonuç true döner not a number açılımı yani içerdeki numara değil dimi diye sorgular sonuç doğru numara değil döner.

/* PRECİSİON
let myNumber = 10.3456757;
result = myNumber.toPrecision(5)
console.log(result); // burada verilen sayının 5 hanesini aldı son hanesi 5 ti onuda 6 ya yuvarladı yani konsola 10.346 basar*/


/*
let myNumber = 10.3456757;
result = myNumber.toFixed(2);
console.log(result);*/ // burada sonuç 10.35 dir.  fixed noktadan sonra 2 rakamı aldı sonuncusunu üste yuvarladı çünki .34 den sonra 5 rakamı geliyor 5 ten küçük olsa sonuç 10.34 olurdu

/* FİXED
let myNumber = 10.3434757;
result = myNumber.toFixed(2)
console.log(result);*/ //sonuç 10.34

/*ROUND
result = Math.round(1.4)
console.log(result);*/ // burada sonuç 1 dir. çünki noktadan sonraki rakam 5 ten küçük o zaman 1 e yuvarlar. 1.5 olsa sonuç 2 olurdu.

/* CEİL
result = Math.ceil(1.3)
console.log(result)*/ // burada sonuç 2 dir. ceil hep bi üst sayıya yuvarlamaya yarar,


/* FLOOR
result = Math.floor(1.3)
console.log(result)*/ // burada sonuç 1 dir.floorda bir aşşağıdaki sayıya yuvarlar


/* POW
result = Math.pow(2,3)
console.log(result)*/ // burada sonuç 8 dir yani 2 nin 3 üncü kuvveti.


/* sqrt
result = Math.sqrt(100)
console.log(result)*/ // burada sonuç 10 dur . 100 ün karekökünü aldık


/* abs
result = Math.abs(-15)
console.log(result)*/ // burada sonuç 15 dir. yani -15 in mutlak değeri.


/*
result = Math.max(2 , 1, 6, 9, 4, 17, 2, 20)
console.log(result)*/ // burada sonuç 20. burdaki en büyük sayıyı alır.

/*
result = Math.min(2 , 1, 6, 9, 4, 17, 2, 20)
console.log(result)*/ // sonuç 1 en küçüğü alır.