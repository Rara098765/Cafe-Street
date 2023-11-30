// let a =['папа', 'мама', 'сын'];
// console.log(a[1]);
// console.log(a[5]);



// let num = [
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
// ];
// console.log(num);
// console.log(num[0][2]);



// let a = ['а', 'б', 'в',];
// console.log(a);
// console.log(a.length);



// let arr = ['папа', 'мама', 'сын'];
// console.log(arr);
// let arrNew = arr;
// arrNew.length = 2;
// console.log(arr);



// let arr = ['папа', 'мама', 'сын',];
// arr [0] = 'дядя';
// console.log(arr);
// arr[3] = 'дочь';
// console.log(arr);



/// push - добавление в конце

// let arr = ['папа', 'мама', 'сын',];
// arr.push('дочь');
// console.log(arr);
// arr.push('дядя', 'тетя');
// console.log(arr);



///shift - удаление начала элемента

// let arr = ['папа', 'мама', 'сын',];
// arr.shift();
// console.log(arr);



///pop - удаление последнего элемента

// let arr = ['папа', 'мама', 'сын',];
// arr.pop();
// console.log(arr);



/// unshift - добавляет элемент в начало

// let arr = ['папа', 'мама', 'сын',];
// arr.unshift('дочь');
// console.log(arr);
// arr.unshift('дядя', 'тетя');
// console.log(arr);



// ///splise - удаление, добавление и замена элементов

// //удаление
// let a = ['папа', 'мама', 'сын',];
// a.splice(1, 1);
// console.log(a);

// // удаляем и возвращвем в переменную
// let b = ['папа', 'мама', 'сын',];
// let removed = b.slice(1, 1);
// console.log(removed);

// // заменяем
// let c = ['папа', 'мама', 'сын',];
// c.splice(0, 1, 'дядя')
// console.log(c);

// // добавляем
// let d = ['папа', 'мама', 'сын',];
// d.splice(1, 0, 'дядя', 'тетя');
// console.log(d);

// // удаляем
// let i = ['папа', 'мама', 'сын',];
// i.splice(-1, 1);
// console.log(i);



// /// slice - создает новый массив в которую копиркет часть или весь массив
// let a = ['папа', 'мама', 'сын',];
// // копирует с 1й позиции до 2й не включая "сын"
// let b = a.slice(1, 2);
// console.log(b);

// // то же самое но наоборот
// let c = a.slice(-2, -1);
// console.log(c);

// // копирует весь массив 
// let d = a.slice();
// console.log(d);



// concat- новый массив который копирует данные из других массивов и дополняет в конце
// let a =['папа', 'мама', 'сын',];
// let b = a.concat('дядя');
// console.log(b);



// // indexOf - ищет элемент если находит 1 если нет -1
// // lastIndexOf - то же самое но ищет с зада на перед
// let a = ['папа', 'мама', 'сын',];

// console.log(a.indexOf('мама'));
// console.log(a.indexOf('дядя'));
// console.log(a.indexOf('мама', 2));

// // includes - true если найдено false если нет
// console.log(a.includes('мама'));
// console.log(a.includes('дядя'));
// console.log(a.includes('мама', 2));



// ==============================================

////функции


