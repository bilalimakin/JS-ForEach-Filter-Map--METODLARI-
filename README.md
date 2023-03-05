# JavaScript'de forEach Nasıl Kullanılır?
### JavaScript'te forEach , döngü oluşturmamızı ve bu döngüyü sırayla çalıştırmamızı sağlayan bir array metodudur.

*- forEach fonksiyonu item, index, array olmak üzere 3 parametre alabilir.*

```
arr.forEach(function(value, index, array) {
  // index ve array kullanmak opsiyoneldir
}
```
Konuyu daha iyi anlamak için her parametrenin aldığı değeri gösteren bir örnek yapalım.

```
const animals = ["cat" , "dog" , "bird", "horse"];
  
animals.forEach((value , index , array) => {
  console.log('value: ', value );
  console.log('value parametresinin aldığı index :', index );
  console.log('array:' , array );
});
```
Aynı fonksiyonu her zaman kullanmak zorunda olduğumuz index parametresiyle yazalım.

```
const animals = ["cat" , "dog" , "bird", "horse"];
animals.forEach( animal => console.log( animal ) );
//Arrow function gosterimi(ES6)
```
Şimdi de forEach kullanarak yeni bir array oluşturabileceğimiz bir fonksiyon yazalım.

```const numbers = [4, 11, 9];
const newArray = [];

numbers.forEach(function(numbers){
  newArray.push(numbers*3);
});
console.log(newArray);

// output = [12, 33, 27]`
```
Numbers array'ini kullanarak her elemanının iki fazlasına sahip olan başka bir array oluşturunuz.

 ```
 const numbers = [12, 24, 36]; 

 numbers.forEach(() => {
     //...
 })
 
 ```

 # Filter() Metodu

 ### Bir Array metodu olan filter(), dizi elemanlarını döngüye alıp, istediğimiz koşula sahip olanlarla yeni bir dizi oluşturmak için kullanılır.

 ```
 const products = ["Mikrofon","Kablo","Telefon","Bilgisayar","Mouse","Klavye","Ekran"]

//Yukarıda products dizisinden, harf sayısı 5'ten fazla olanları almak istiyorum.

const newProducts = products.filter(eleman => eleman.length > 5)
console.log(newProducts); //["Mikrofon", "Telefon", "Bilgisayar", "Klavye"]
 ```

 Yukardaki örnekte harf sayısı 5'ten fazla olan elemanları filter() metodu ile filtreleyip, newProducts adında oluşturduğum yeni diziye atadım.

Pekiştirmek için bir örnek daha yapalım.

```
const users = [
	{fullName: "Mehmet Veli", isActive: false},
	{fullName: "Ali Duran", isActive: true},
    {fullName: "Ahmet Yılmaz", isActive: true},
    {fullName: "Oğuz Şahin", isActive: false},
]
```
Yukardaki users dizisindeki nesneler içerisinden isActive'i true olanları almak istiyorum.

```
const activeUsers = users.filter(user => user.isActive === true);
console.log(activeUsers.fullName); //(2)[{...},{...}] (Ali Duran, Ahmet Yılmaz)
//Üst satırdaki sonuç bize, elemanları nesne olan 2 elemanlı bir dizi olduğunu söylüyor.

```

# Array Map
Array Map metodu, parametre ile kendisine gönderilen dizinin her bir elemanı için ayrı ayrı çalışır ve belirlenen işleme tabi tutup, yeni bir dizi meydana getirir. Örneğin; elimizdeki dizinin tüm elemanlarının iki katını almak istediğimiz zaman kullanabiliriz. Array Map metodu, kendisine parametre olarak gönderilen diziye herhangi bir müdahalede bulunmaz. Mevcuttaki dizinin her elemanını belli bir işleme tabi tutarak yeni bir dizi oluşturur. Bu kısım önemlidir.

Öncelikle Array Map metodunun kullanımına bir göz atalım.

array.map( function(value, index, array), this)

Gönderilen parametreleri inceleyelim;

array : Üzerinde işlem yapılacak olan diziyi belirtir. Bu dizinin her bir elemanı map metotunun içinde belirleyeceğimiz işleme tabi tutulacaktır.
value : Üzerinde işlem yapılan dizi değerini belirtir.
array : Üzerinde işlem yapılan diziye erişimi sağlar
this : Kullanımı zorunlu değildir(opsiyoneldir). this değişkenine iletilecek olan değeri belirtir.