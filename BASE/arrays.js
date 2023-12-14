const arr = ["hello", 5, 2, 3, 1, 4]

console.log(arr)
console.log(arr[0], arr[2])

arr[0] = "hello world";
arr[7] = "hi"
console.log(arr);
console.log(arr.length)
console.log(arr.at(-1));

delete arr[-2]
console.log(arr);

//shrift and pop
const first = arr.shift()
console.log();
console.log(arr);

const dalit = arr.pop()
console.log()
console.log(arr)

//unshift
arr.unshift("hello")
console.log(arr);


//push
arr.push("hi")
console.log(arr);


//loop

const newArr = []
for (let i = 0; i < arr.length; i++)  {
    if (!isNaN(arr[i])) {
        newArr.push(arr[i])
    }
}

let name = "aregn"
let index = name.indexOF("argen")
console.log(index);



// 0. Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем только неповторяющиеся числа.

const nerarr = [55, 44, 55, 44, 15, 49]
const filter = nerarr.filter((value ,inx, arr) => {
    return arr.indexOf(value)  === inx
})
console.log(filter);
