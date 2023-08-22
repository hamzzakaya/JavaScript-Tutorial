/*
let cart = 'hamza kaya';

console.log(cart.length)*/ // bunun sonucu 10 dur değişken tanımlamadan direk bastırmak.



let ad = 'hamza kaya'
let result;

//LENGTH ÖZELLİĞİ
result=ad.length;
console.log(result) // bunun sonucu 10dur değişkene atayarak uzunluğunu bulduk.

//SLİCE ÖZELLİĞİ
result= ad.slice(0,4)
console.log(result)// sonuç hamz 

//REPLACE ÖZELLİĞİ
result=ad.replace(' ','')
console.log(result)// sonuç hamzakaya boşlukları boşluksuza çevirdi yani virgülün solundakini virgülün sağındakine çevirdi



//SPLİT ÖZELLİĞİ

result=ad.split(' ')
console.log(result);// sonuç ['hamza', 'kaya'] split burada boşluktan alıp array haline getiriyor

result=ad.split()
console.log(result);// sonuç ['hamza kaya']

result=ad.split('')
console.log(result);// sonuç ['h', 'a', 'm', 'z', 'a', ' ', 'k', 'a', 'y', 'a']


//STARTSWİTH ÖZELLİĞİ

result = ad.startsWith('hamza')
console.log(result); // sonuç true yani burada ad değişkeni hamza ile başlıyor mu kontrol ettik

result = ad.startsWith('ham')
console.log(result); // sonuç true döner yani hamza içeriği taşıyan ne varsa onla başlıyorsa true döner ama hamzaaa yı sorgulasaydık false dönecekti.

if(result){
    console.log('yapılacaklar');// burada konsola yapılacaklar basar yani eğer doğruysa yapılacaklar yazmasını istedik.
}


//İNDEXOF ÖZELLİĞİ

result = ad.indexOf('kaya')
console.log(result); // burada aramak istediğimiz şeyin kaçtan başladığını bize döndürür yani sonuç 6 dır. saymaya sıfırdan başlar ama aradığımız şey yoksa sonuç -1 döndürür.

result = ad.indexOf('ayak')
console.log(result); // sonuç -1 dir 


