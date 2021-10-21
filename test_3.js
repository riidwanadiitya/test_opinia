// let angka =[20,10,100,30,15,5];


// //nomor 3.a
// function angkaAsc(){
// angka.sort(function(a,b){
//     return a-b;
// });
// return angka
// }
// console.log(angkaAsc());

// function angkaDesc (){
//     angka.sort(function(a,b){
//         return b-a;
//     })
//     return angka
// }

// console.log(angkaDesc());
// console.log("===========")

// //nomor 3.b
// function addNum (){
//     angka.push(180)
//     return angka
// }
// console.log(addNum())
// console.log("===========")


// //3.c

// function delNum(){
//     let numbers= angka;
//     numbers = numbers.filter((n) => {return n != 30});
//     return numbers
// }
// console.log(delNum());
// console.log("===========")

const angka = [20,10,100,30,15,5]

console.log("Angka Asli: ", angka)
// soal 3a
console.log("Soal No. 3a")
var angka_sort_asc = Object.assign([], angka)
angka_sort_asc.sort((a, b) => a-b)
console.log(angka_sort_asc)

var angka_sort_desc = Object.assign([], angka)
angka_sort_desc.sort((a, b) => b-a)
console.log(angka_sort_desc)
console.log()

// soal 3b
console.log("Soal No. 3b")
var angka_3b = Object.assign([], angka)
angka_3b.push(180)
console.log(angka_3b)
console.log()

// soal 3c
console.log("Soal No. 3c")
var angka_3c = Object.assign([], angka)
const index = angka_3c.indexOf(30)
if (index > -1) {
    angka_3c.splice(index, 1)
}
console.log(angka_3c)