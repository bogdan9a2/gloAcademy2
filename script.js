let title = 'Первый проект';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 10000;
let rollback = 10;
let fullPrice = 300000;
let adaptive = true;

//Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

//Вывести в консоль длину строки из переменной screens
console.log(screens.length);


//Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей” и “Стоимость разработки сайта (fullPrice) рублей”
console.log('Стоимость верстки экранов: ' + ' ' + screenPrice + '' + 'рублей');
console.log('Стоимость верстки сайтов: ' + ' ' + fullPrice + '' + 'рублей');

//Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(screens.toLowerCase().split());

//Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
console.log(fullPrice * (rollback / 100));


// Из первого урока
// alert('Здорова')
// console.log('Тестовый текст')