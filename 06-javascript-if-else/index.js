let isLoggedIn = true; //burada true yu isLoggedIn içine atadı 
 if(isLoggedIn == true){//burada true isLoggedIn e eşitmi diye baktı eğer eşitse alt satıra geç devam et dedi
    console.log("calisti");// burada yukardaki işlemler bittikten sonra bu satıra geçebildiği için bu satırdaki işlemi yap dedi ve burada istenen sadece konsola calistir stringi basmak
 }


 let isLoggedIn2 = false;//burada falseyi isLoggedIn2 ye atadık
 if(isLoggedIn2 == true){//burada isLoggedIn2 yani false true ile eşit mi diye baktı değilse elseye inecek
    console.log("calisti")
 }else{
    console.log("true degil");// yukarıdaki işlem hatalı olduğu için buraya girdi ve konsola true degil bastı
 }

 console.log(("cikti"))//işlem bitincede döngüden çıktı buraya girdi ve cikti yazısı bastı



 //*BAŞKA BİR ÖRNEK YAPALIM BİRAZ GİRİŞ FORMUNA BENZESİN *//

 const username = "hamzakaya";
 const password = "12345";

 if(username == "hamzakaya"){
  console.log("giriş yapıldı")
}else{
    console.log("kullanıcı bulunamadı");
}
// yukarıdaki örnekte username hamzakaya ise bu döngüdeki yazılan konsola basılıyor yani giriş yapıldı şeklinde.
// ama eğer hamzakaya değilde hamzakayaa yazdı ve if döngüsünde hata belirlendiği için else yapısına geçseydi konsola kullanıcı bulunamadı yazılacaktı...





const username1 = "hamzakaya";
 const password1 = "12345";

 if(username1 == "hamzakayaa"){
    if(password1 == "12345"){
        console.log("giriş yaptıkk");
    }else{
        console.log("şifre yanlış")
    }
 }else{
    console.log("yanlış şifre veya kullanıcı adı");
 }
  



 
    const firstName = "sena";
    const age = 11;

    if( age > 0 && age < 12) { // age 0 dan büyük ve 12 den küçük ise
        console.log(`${firstName} is a child`);// burada backtick kullanacaksın dolar işaretide string içinde değişken kullanımına yarıyor 
    }// yani burada konsola sena is a child basar