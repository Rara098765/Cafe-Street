// let task3 = [175, 50, 30];
// let sum = task3.reduce(function(a, b) {
//     return a - b 
// })
// console.log(sum);




// let task4 = [4, 15, -4, 27, 12];
// function maxim(num) {
//     return Math.max.apply(null, num);
// }
// console.log(maxim(task4));



// let data = [['a', 1], ['b', 2]];
 

//============================================

// let users = {
//     "John": 28,
//     "Mark": 30,
//     "David": 25,
//     "Richard": 42
// };
// const usersKey = Object.values(users);
// const sumUsers = usersKey.reduce((a, b)=> a + b);
// console.log(sumUsers);



// let task2 = [10, 25, 25, 15, 5, 10];
// let taskSum = 0;
// task2.forEach(function(num) {
//     taskSum += num
// });
// console.log(taskSum);



// function elevator () {
//     let mestoFloor = 1;
    
//     function printFloor () {
//         if (mestoFloor < 16) {
//             mestoFloor++;
//         }
//     }
//     function upOneFloor () {
//         if (mestoFloor > 1) {
//             mestoFloor--;
//         }
//     }
//     function toFloor (a) {
//         if (a >= 1 && a <= 16) {
            
//         }
//     }
// }




// let lift = {
//     prinFloor: 
// }


// ======================================================================
// рекурсия и замыкание
// локальный и глобальный
// ======================
// const fruit = ['kiwi', 'apple', 'ananas', 'banana', 'kiwi', 'apple'];

// const count = {
//     kiwi: 1,
//     apple: 1
// }

// fruit.forEach((i) => {
//     if (!count[i]) {
//         count[i]= 1;
//     } else {
//         count [i] ++;
//     }
// })
// console.log(count);
// ======================

// function newRes(i) {
//     if (i === 1) {
//     return 1;
//     } else {
//         return(i + newRes(i - 1))
//     }
// }

// console.log(newRes(5));

// ====================================================================

// Хойстинг
// console.log(goName);

// var name1 = 'Rabi';
// let name2 = 'Rabi'

// function goName () {
//     console.log(name1);
// }

// function goName () {
//     console.log(name1);
// }
// const goName = function (){
//     console.log(name2);
// }


// задачи ==============================


// let lift = {
//     printFloor: 1,
//     upOneFloor () {
//         console.log(`Вы нахадитесь на  ${this.printFloor} этаже`);
//     },

//     downOneFloor () {
//         if (this.printFloor <= 16 ) {
//             this.printFloor++;
//         }
//     },
//     toFloor () {
//         if (this.printFloor >= 1 ) {
//             this.printFloor--;
//         }
//     },
//     inToFloor (naFloor) {
//         if (naFloor >= 1 && naFloor <= 16) {
//             while (this.printFloor !== naFloor) {
//                 if (this.printFloor < naFloor) {
//                     this.inToFloor();
//                 } else {
//                     this.downOneFloor();
//                 } 
//                 this.printFloor();
//                 }
//             }
//         }
//     };
    
// lift.inToFloor(1);
// lift.inToFloor(15);
// ========================================================================================


// let x = 2000
// let y = 53
// let z = 72
// const zalitui_benzin = x - z;
// const benzin = zalitui_benzin / y
// console.log(benzin);





// function num(k, n) {
    
//   }

// console.log(num(9, 5));



// console.log(`{"5".repeat(9)}`)




// function testStr(str, n) {
//     let a = str [n - 1];
//     return a;
// }
// console.log(testStr("Ithardlycousinmealways, 19"));


// let k = 9;
// function recursion(){
//   let n = 5
//     k--;
//     console.log(n);
//     if (k == 0) {
//         return k;
// }
//     recursion();
// }

// recursion();



// function testStr(str, n) {
//     let a = str[n - 1];
//     return bruto
// }

// console.log(testStr("Ithardlycousinmealways", 19));