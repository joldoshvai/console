const arr = [1, 2, 3, 4, ]
const arr2 = arr
arr2.push(5)
console.log(arr2, arr);

let nwe = "aregn hello"
let index = nwe.indexOf("3")
console.log(index);

const der = ["alma", "ananas", "banan"]
let aswr = der.join("a ")
console.log(aswr);

console.log("");


const newarr = [315, 64, 75, 43, 65, 63]
 const sum = newarr.reduce((acc, el) => {
    return acc + el
 },0)

 console.log(sum)


 //Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.

const namea = ['Аскар', 'Баяман', 'Калмамат'] 
   const ser = namea.unshift((el,inx) => {
    return 
   })
   console.log();
//10. Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем только неповторяющиеся числа.
   const sumn = [55, 44, 55, 44, 15, 49]  
   const ner  = sumn.filter(el => el)

   // 0. Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем только неповторяющиеся числа.

const nerarr = [55, 44, 55, 44, 15, 49]
const filter = nerarr.filter((value ,inx, arr) => {
    return arr.indexOf(value)  === inx
})
console.log(filter)

//11. Вам дан массив [NaN, 0, 77, false, -17, '',undefined, 99, null]. Создайте функцию, которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустая строка).

// const mass = [NaN, 0, 77, false, -17, '',undefined, 99, null]  
// const rezult = mass.filter((el, inx, array) => {
//    return  array(mass)
// })
// console.log(rezult)

//12. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.

const namearr = ['Бегимай', 'Баяман', 'Калмамат']

const verrn = namearr.indexOf("")

console.log(verrn)



// function  removeFalsyValues(array) {
   // return array.filter(Boolean)
// }
// const mass = [NaN, 0, 77, false, -17, '',undefined, 99, null]  
// const serez = removeFalsyValues(mass)

// console.log(serez);