//ÖRNEK-1
/*
let yas = 18;
let mezunıyet = 'lise';

if( yas >= 18 ){ // burada eğer adayın yaşı 18'e eşit yada daha büyükse alt satıra geçer ve konsola konsol içini basar

console.log('ehliyet şartlarını karşıladığın için ehliyet alabilirsin')
}*/


//ÖRNEK-2
/*
let yas = 18;
let mezunıyet = 'lise';
 if(yas>=18 && mezunıyet=='lise'){ //burada yaş 18 ve daha büyük ve mezuniyet liseye eşitse alt satıra geçer ve konsola basar

    console.log('ehliyet alabilirsin') 
 }*/


//ÖRNEK-3
/*
let yas = 18;
let mezunıyet = 'universite';

if(yas>=18 && mezunıyet=='lise'){
    console.log('ehliyet alabilirsin') // burada mezuniyet şartı artık üniversite olduğu için şartı karşılamıyor ve alt satıra yani else yani değilse satırına geçiyor
}else{
    console.log('ehliyet alabilmeniz için universite mezunu olmalısınız') burada şartı karşılamadığı için else satırına geçti ve konsola burada yazanı bastı
}*/



//ÖRNEK-4
/*
let yas = 18;
let mezunıyet = 'universite';

if(yas>=18 && (mezunıyet=='lise' || mezunıyet=='universite')){ //burada yas 18 ve üstüyse VE lise VEYA üniversite mezunuysa alt satıra geçer ve konsola basar
    console.log('ehliyet alabilirsin')
}*/



//Örnek-5
/*
let yas = 17;
let mezunıyet = 'universite';

if(yas>=18 && (mezunıyet=='lise' || mezunıyet=='universite')){

}else if(yas===17){
    console.log('ehliyet alabilmeniz için 1 yaş daha gerekli')//burada normalde yukarıdaki şartlar sağlanmadığı için else if satırına girdi ve yaş eğer 17 ise bir sene daha beklemesi gerektiğini konsola bastırdık
}*/


