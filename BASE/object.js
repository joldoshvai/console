// const person = {
//     name: {
//       last: "argem",
//       first: "zholdoshvai"
//     },
//     agg: 18,
//     sayhello: function () {
        
//         return ( "hello ,my name is " + this.name.last + "i am" + this.agg + "yors old")        
//     }

// }
// // dot notation
// console.log(person.name);

// // brucket notation
// const a = "name"
// console.log(person[a]);
// for (const key  in person) {
//     console.log(key)
// //     console.log(person[key]);
// // }
// console.log(person.sayhello());
// const arrr = {
//     count: 0,
//     increment: function () {
//         this.count+= 1
//     },
//     oulinclbent: function() {
//         this.count-= 1
//     }
// }
// console.log(arrr.increment());

// let art = prompt("")
// if ( art.length === 1) {
//     // alert ("#")
//     var rst = ""
//     for (let i = 0;i < 14;i++) {
//         if (i === 7){
//             rst += ""
//         }else {
//             rst += art
//         }
//         // rst += art
//     }

//         for (let j = 0; j < 3; j++) {
// //  let wert = alert(i) + art + j
//          alert (rst);
//     } 
// }  else {
//      alert("")
    // console.log(art);
// }\
// console.log();
// console.log(art);


// const symbol = prompt("");

//  let smileRow = "   prompt \n";

// let rectangle = "";
// for (let i = 0; i < 3; i++) {
//     if (i === 1) {
//         rectangle +="# " + symbol + " #"; 
//     } else {
//         for (let j = 0; j < symbol.length+4; j++) {
//             rectangle += "#"
//         }
//     }
//     rectangle += "\n"; 
// }    

// console.log(rectangle);



// let earr = +    prompt("")

// var circil = {
//     radius: 1,

//     getaren: function () {
//         return Math.PI * Math.pow(this.radius, 2)
//     },
//     getCircumference: function (){
//         return 2 * Math.PI * this.radius;
//     }

// }   
// circil.radius = earr
// console.log(circil.getaren(), circil.getCircumference());


// беиек методтору

// get keys 
// console.log(person);

// console.log(Object.keys(person));

// // get velues

// console.log(Object.values(person));

 // entrise   оюбиект кошот
// console.log(Object.entries(person));

// assigz
// const aert = {
//     jop: "frontent",
//     exper: "2 yarst",
//     edice: "wiehfwi"
// }
// Object.assign(person, aert);
// console.log(person);
// console.log(aert);

// freeze

// Object.freeze(person)
// person.agg = 15;
// person.concook = true;
// console.log(person);

// //seal
// Object.seal(person);
// person.agg = 15;
// person.concook = true;
// console.log(person);

const odj = { 
    a:1, 
    b:2, 
    c:3, 
}
let objectAr=Object.keys(odj);
console.log(objectAr.length);
let length = odj.length;
console.log(length);

const arr = [{
    a: 1,
    b: 2,
    c: 3,
}]
console.log(Object.values(arr));
//  3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.

const earr = {
    money: {
        shirin: 1000,
        atay: 200,   
    },
    ayizhan:500
    }

console.log(earr.money);

// 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Измените зарплату Атая на 500.

const weer = {
    shirin :1000,
    aizhan :500 ,
    atay: 200
}
Object.seal(weer);
weer.atay = 500;
console.log(weer);

// 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Добавьте к объекту ключ Медет со значением 1500.

const wewe = {
    shirin :1000,
    aizhan :500 ,
    atay: 200
}
const trt = {
    meded: 1500
}

Object.assign(wewe, trt);
console.log(wewe);
// console.log(trt)

// 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите значение ключа salary в консоль.

const weee = {
    shirin :1000,
    aizhan :500 ,
    atay: {
        salary: 500
    }
}
console.log(weee.atay.salary);


// 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

const weekDay = {
    1: "пониделник",
    2: "вторник",
    3: "среда",
    4: "четверг",
    5: "пятница",
    6: "суббота",
    7: "Воскресенье"
}
console.log(weekDay["2"]);


// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.


const nid = {
    1: "пониделник",
    2: "вторник",
    3: "среда",
    4: "четверг",
    5: "пятница",
    6: "суббота",
    7: "Воскресенье"
}
let day = nid[3]
console.log(day);

// 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все ключи объекта.
const salary ={
    Ширин: '1000',
     Айжан:'500',
      Атай: {
        salary: '500'
      }
}

console.log(Object.keys(salary));


//     10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все значения объекта.

const oberk = {
    Ширин: '1000',
     Айжан:'500',
      Атай: {
        salary: '500'
      }
}
console.log(Object(oberk));

//11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите все entries объекта.

const onter = {
    Ширин: '1000',
     Айжан:'500',
      Атай: {
        salary: '500'
      }
}

console.log(Object.entries(onter));

//12. Создайте функцию, передайте в нее объект {name: 'Igor'}. Выведите 1, если длина ключа name нечетная, 0 если четная.
const funcs = function () {
    name: "Igor"
}