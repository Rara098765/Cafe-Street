// let person = {
//     name: 'Rabiga',
//     age: 100,

//     sayName: function () {
//         console.log(`Hello ${this.name}`);
//     },
//     sayAge: function () {
//         console.log(`I am ${this.age} years old`);
//     }
// }
// person.sayName();
// person.sayAge();



// callbak
// function sayHello (action) {
//     let askName = prompt('Как вас зовут?')
//     action(askName)
// }

// sayHello((name) => console.log('Hello' + name))



// forEach - метод, который перебтрает массив, не делая никаких изменений
// const arr = ["Эдзен", "Аэлита", "Анваар", "Алмаз", "Тимур"]

// arr.forEach((item)=> {
//     allNamesTogether += item + " "
// })

// console.log(allNamesTogether);



// map- метод который перебирает массив и возварщает новый массив с изменнеными данными

// const newArr = arr.map((item)=> {
//     if (item.length>5) {
//         return item + ' - длинное имя'
//     } else {
//         return item+ ' - короткое имя'
//     }
// })

// const newArr2 = arr.map(item => item.slice(0 , 3))

// console.log(newArr);
// console.log(newArr2);



// const newArr3 = arr.map((item, index ) => {
//    return index + ')' + item 
// })

// const newArr4 = arr.map((item, index )=> {
//     return{
//         id: index,
//         name: item 
//     }
// })

// console.log(newArr3);
// console.log(newArr4);



