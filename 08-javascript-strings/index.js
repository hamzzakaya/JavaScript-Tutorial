const ad = 'hamza';
const soyad = 'KAYA';
const yas = 29;
const sehir = 'Kütahya';
const mesle = 'mühendis';

const bio = "Benim adım " + ad + " soyadım " + soyad + " " + sehir + " 'da yaşıyorum. " + yas + " yaşındayım. ";

console.log(bio); // burada konsola Benim adım hamza soyadım KAYA Kütahya 'da yaşıyorum. 29 yaşındayım. yazısı basılır fakat bu yazı şekli bizi uğraştırır çünki noktalama yaparken veya yazılıarı ayırırken uğraşırız bunun yerine backtick ile yazmalıyız.


// BACKTİCK İLE YAZILIŞ ÖRNEĞİ

const newBio = `Benim adım ${ad} soyadım ${soyad}. ${sehir} 'da yaşıyorum. ${yas} yaşındayımmm`

console.log(newBio);// burada konsola Benim adım hamza soyadım KAYA Kütahya 'da yaşıyorum. 29 yaşındayım. yazısı basılır bu şekilde yazmak bize kolaylık sağlar
