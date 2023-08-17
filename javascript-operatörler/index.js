//   OPERATÖRLER

//   1-Aritmatik operatörler
      //? +, -, *, /, ++, --

      let number1 = 10;
      let number2 = 20;
      let number3 = 30;
      let result = number1 + number2
      console.log(result);//sonuç konsola 30 basar

      result= number1++
      console.log(number1); // burda sonuç 11 verir ( geliyo işte number1 neyse alıyo onu sonra gelip 1 arttırıyor falan)
      result= ++number1
      console.log(result);// burda sonuç 12 yukardakiyle farkı ise şu yukardaki önce değeri atıyor sonra 1 ekliyor aşşadaki ise önce 1 ekliyor sonra değerin içine atıyor


      

//   2-Atama operatörleri(+=, -=, /=, *=) gibi
result+=number2
console.log(result);// burada sonuç 32 dir. yani toplayıp resulta ekliyor 12+20





//   3-Karşılaştırma operatörleri(==,!=,===,<=,>=) gibi
result=number1==number2
console.log(result);//burada sonuç falsedir burada yapılan şey number2 number1'e eşitmi kontrol ediyor



result=number1!=number2
console.log(result);// burada sonuç true. yani eşit değil değil mi diye kontrol ediyor cevap evet eşit değil yani true



// bunlara başka bir örnek yapalım
result = 10==10 //bunun cevabı evet eşittir yani true
result = 10=='10'//bunun cevabıda eşittir yani true
result = 10==='10' // bunun cevabı falsedir çünki değerin yanında tipinede bakıyor biri number biri string yani false aslında burda yapılan şey sağdakini soldakine değiştirmeye çalışıyor değişebiliyor ise true değilse false





//?  4-Mantıksal operatörler
// &&:ve,  ||: veya , !:tersi

console.log(number1 !== number2 && number1 > number2);