//method to upper case adalah method yang  berfungsi untuk mengonversi semua huruf dalam string menjadi huruf besar (uppercase)
const text = 'halo aidil';
const upperCaseText = text.toUpperCase();
console.log(upperCaseText);

//method to lower case adalah method yang  berfungsi untuk mengonversi semua huruf dalam string menjadi huruf kecil (lowercase)
const text2 = 'Halo Aidil';
const lowerCaseText = text2.toLowerCase();
console.log(lowerCaseText);

//method substring adalah method yang digunakan untuk mengambil potongan dari sebuah string
const text4 = 'Aidil sangat tampvan';
const substring2 = text4.substring(0, 5);
const substring = text4.substring(13, 20);
console.log(substring2 +' '+substring);

//method push adalah method yang berfungsi untuk menambahkan satu atau lebih elemen ke akhir array dan mengembalikan panjang array yang baru
const foods = ['hamburger', 'is', 'not'];
foods.push('healthy');
console.log(foods);

//method reverse adalah method yang berfungsi untuk membalik urutan elemen-elemen dalam sebuah array
const text5 = 'wassup yo, how you doin';
const newText = text5.replace('yo', 'man');
console.log(newText);

//method include adalah method yang berfungsi untuk memeriksa apakah sebuah elemen atau nilai tertentu terdapat dalam array
const text6 = 'Incididunt adipisicing aliqua esse magna aute non ea quis. Sit ex sint anim amet ea dolore anim minim consequat nisi occaecat minim nulla aute. Ex pariatur minim pariatur exercitation incididunt eiusmod qui laboris dolor. Exercitation velit in qui enim mollit laboris adipisicing aliqua labore irure est qui in cupidatat. In aliqua consectetur est nisi culpa ipsum est ullamco proident voluptate.';
const includesWorld = text6.includes('consequat');
console.log(includesWorld);

//method concat adalah metode ini digunakan untuk menggabungkan dua atau lebih array menjadi satu array baru tanpa mengubah array asli
const ikan1 = ['sarden', 'buntal'];
const ikan2 = ['duyung', 'tuna'];
const fish = ikan1.concat(ikan2);
console.log(fish);

//method math.random adalah method yang digunakan untuk menghasilkan bilangan acak antara 0 dan 1
const randomValue = Math.random();
console.log("Random Value:", randomValue);

//method getTime adalah method yang mengembalikan waktu dalam bentuk timestamp, yang merupakan jumlah milidetik yang telah berlalu sejak tanggal dan waktu tertentu
const currentTime = new Date();
const timestamp = currentTime.getTime();
console.log(`Timestamp: ${timestamp}`);

//method for each adalah method yang digunakan untuk menjalankan sebuah fungsi callback pada setiap elemen dalam array tanpa mengubah array itu sendiri
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number, index) {
  console.log(`Element at index ${index} is ${number}`);
});
