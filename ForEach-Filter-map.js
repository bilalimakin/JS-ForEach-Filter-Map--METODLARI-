/*const animals = ["cat" , "dog" , "bird", "horse"];
  
animals.forEach((value , index , array) => {
  console.log('value: ', value );
  console.log('value parametresinin aldığı index :', index );
  console.log('array:' , array );
});*/

/*
const animals = ["cat" , "dog" , "bird", "horse"];
animals.forEach( animal => console.log( animal ) );*/

/*
const numbers = [4, 11, 9];
const newArray = [];

numbers.forEach(function(numbers){
  newArray.push(numbers*3);
});
console.log(newArray);
*/
// output = [12, 33, 27]

/*
const numbers2 = [12, 24, 36]; 
let newArray2 = [];

numbers2.forEach((numbers2)=>{
    newArray2.push(numbers2+2);
});
console.log(newArray2)


//FİLTER METODU
/*
const products = ["akin","Mikrofon","Kablo","Telefon","Bilgisayar","Mouse","Klavye","Ekran"]

//Yukarıda products dizisinden, harf sayısı 5'ten fazla olanları almak istiyorum.

const newProducts = products.filter(eleman => eleman.length > 5)
console.log(newProducts); //["Mikrofon", "Telefon", "Bilgisayar", "Klavye"]
*/

/*

const person = [
  {name: "Adem",age: 25,languages: ["JavaScript", "CSS"],},
  {name: "Oğuz",age: 33,languages: ["Java", "HTML"],}
]

const oldman = person.filter(man => man.age >= "30")
console.log(oldman.name)*/
/*
const users = [
	{fullName: "Mehmet Veli", isActive: false},
	{fullName: "Ali Duran", isActive: true},
  {fullName: "Ahmet Yılmaz", isActive: true},
  {fullName: "Oğuz Şahin", isActive: false},
]

//Yukardaki users dizisindeki nesneler içerisinden isActive'i true olanları almak istiyorum.

const activeUsers = users.filter(user => user.isActive === true);
console.log(activeUsers); 
//(2)[{...},{...}] (Ali Duran, Ahmet Yılmaz)
//Üst satırdaki sonuç bize, elemanları nesne olan 2 elemanlı bir dizi olduğunu söylüyor.

*/


const person = [
  {name: "Adem",age: 25,languages: ["JavaScript", "CSS"],},
  {name: "Oğuz",age: 33,languages: ["Java", "HTML"],}
]

const Bigman = person.filter(man => man.age >30 )
console.log(Bigman)


const Bigman2 = person.filter(man => man.languages[0] === "JavaScript" )
console.log(Bigman2)