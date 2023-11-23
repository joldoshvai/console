//  array
const arr = [1, 2, 3, 4]

delete arr[0]

//splice 
arr.splice (2, 3, 63, 56, 80)
console.log(arr);


//slice

const newarr = arr.splice(0, 2);
console.log(newarr);
console.log(arr);


// indexof   страканы алдынан эсептейт
console.log(arr.indexOf(2));

// lastindexof стаканы артынан эсептеп берет
console.log(arr.lastIndexOf(2));
// includes  барюы / жокпу 
console.log(arr.includes(4));
// reverse массивти наборот эсептейт

console.log(arr.reverse());

//split стракага болот

let str = "hello my forld"

const strarr = str.split(" ")
console.log(strarr);

//join массивди кошот

console.log(strarr.join(" "));

//isarray массивди \ массив эмес
console.log(Array.isArray(arr));

// concat / бир катарга тургузат

const joininsdArr = arr.concat(arr.strarr);
console.log(joininsdArr);