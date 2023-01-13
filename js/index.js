// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

document.write('1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).. Відповідь: ');

let str = '';

for (let i = 20; i <= 30; i = i + 0.5) {
    str = str + ' ' + i; 
}

document.write(str + '.');

// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

document.write('<br>' + '2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів. Відповідь: ' +  '<br>');

let oneDol = 27;

for (let i = 10; i <= 100; i = i + 10) {
    document.write(`Ціна ${i}$: ${i} X ${oneDol} = `+ oneDol * i + ' грн.' + '<br>');
}

// 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

document.write( '3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.' +  '<br>');

let numberN = prompt('До завдання 3. Введіть ціле число N:')
let sqr;
let strSqr ='';

if (numberN === null ) {
    document.write(``)
} else if (numberN.trim() === '') {
    document.write(``) 
} else if (isNaN( +numberN)) {
    document.write(``) 
} else { document.write(`Ваше число N = ${numberN}. Відповідь: `);}

if (numberN === null) {
    document.write(' Ви нічого не ввели, якщо ви хочете, перевірити умову з завдання 3, оновіть сторінку і спробуйте ще!');
} else if (numberN.trim() === '') {
    document.write(' Ви нічого не ввели, якщо ви хочете, перевірити умову з завдання 3, оновіть сторінку і спробуйте ще!');
} else if (isNaN( +numberN)) {
    document.write(' Ви ввели букви, якщо ви хочете, перевірити умову з завдання 3, оновіть сторінку і спробуйте ще!');
}

for (let i = 1; i <= 100; i = i + 1) {
    sqr = i*i;
    if (sqr <= numberN) {
        document.write(strSqr = ' ' + i);
    } 
}

// 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let tild ='`'
document.write('<br>' + `4. Дане ціле число. З${tild}ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе). Відповідь:` +  '<br>');

let numberEasy = prompt('До завдання 4. Введіть число яке ви хочете перевірити чи є воно простим:');
let count = 0;
let sum = 0;

if (numberEasy === null ) {
    document.write(``);
} else if (numberEasy.trim() === '') {
    document.write(``); 
} else if (isNaN( +numberEasy)) {
    document.write(``); 
} else { document.write(`Ви перевіряєте число: ${numberEasy}.`);}


for (let i = 2; i <= numberEasy; i = i + 1) {
    if (numberEasy % i === 0) {
        count = count + 1;
    }
}
      
if (count > 1) { document.write(` ${numberEasy} - непросте число.`);
} else if (numberEasy === null) {document.write(`Ви нічого не ввели оновіть сторінку та спробуйте ще!`);
} else if (numberEasy.trim() === '') {document.write(`Ви нічого не ввели оновіть сторінку та спробуйте ще!`);
} else if (isNaN( +numberEasy)) {document.write(`Ви ввели букви, оновіть сторінку та спробуйте ще!`);
} else {document.write(` ${numberEasy} - це просте число.`);}

// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

document.write('<br>' + `5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).` +  '<br>');

let numberQube = prompt('До завдання 5. Введіть число яке ви хочете перевірити чи є воно похідною від 3 в деюкому ступені:');
let indicator = 0;
let degree;

if (numberQube === null ) {
    document.write(``)
} else if (numberQube.trim() === '') {
    document.write(``) 
} else if (isNaN( +numberQube)) {
    document.write(``) 
} else { document.write(`Ви перевіряєте число: ${numberQube}. Відповідь: `);}

if (numberQube === null) {
    document.write(' Ви нічого не ввели, якщо ви хочете, перевірити умову з завдання 5, оновіть сторінку і спробуйте ще!');
} else if (isNaN( +numberQube)) { document.write(`Ви ввели букви, оновіть сторінку та спробуйте ще!`);
} else if (numberQube.trim() === '') { document.write(' Ви нічого не ввели, якщо ви хочете, перевірити умову з завдання 5, оновіть сторінку і спробуйте ще!');} 

for (let i = 0; i <= numberQube; i = i + 1) {
    degree = 3 ** i;
    if ( degree == numberQube) {
        indicator = indicator + 1;
    } 
}

if (indicator === 1) {
    document.write(`Так, можна отримати число ${numberQube} шляхом зведення числа три в ступінь. `);
} if (numberQube === null) {
    document.write('');
} else if (numberQube.trim() === '') {
    document.write('');
} else if (isNaN( +numberQube)) {
    document.write('');
} else if (indicator === 0) {document.write( `Ні, не можна отримати число ${numberQube} шляхом зведення числа три в ступінь. `); }

