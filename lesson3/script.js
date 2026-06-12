//  Спрашиваем у пользователя “Как называется ваш проект?” и результат сохраняем в переменную title
let title = prompt("Как называется ваш проект?");

//Спросить у пользователя “Какие типы экранов нужно разработать?” сохранить в переменную screens (пример: "Простые, Сложные, Интерактивные")
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

//Спросить у пользователя “Сколько будет стоить данная работа?” и сохранить в переменную screenPrice (пример: 12000)
let screenPrice = +prompt("Сколько будет стоить данная работа?");

//Спросить у пользователя “Нужен ли адаптив на сайте?” и сохранить данные в переменной adaptive (булево значение true/false)
let adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?", "Простые, Сложные, Интерактивные");
let servicePrice1 = +prompt("Сколько будет стоить данная дополнительная услуга?");
let service2 = prompt("Какой дополнительный тип услуги нужен?", "Простые, Сложные, Интерактивные");
let servicePrice2 = +prompt("Сколько будет стоить данная дополнительная услуга?");

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = Math.round(fullPrice * 0.1);

console.log("Остаток процента: " + servicePercentPrice);

if (fullPrice > 30000) {
    servicePercentPrice = Math.round(fullPrice * 0.1);
    console.log("Остаток процента: " + servicePercentPrice);
} else if (fullPrice > 15000 && fullPrice <= 30000) {
    servicePercentPrice = Math.round(fullPrice * 0.05);
    console.log("Остаток процента: " + servicePercentPrice);
} else if (fullPrice > 0 && fullPrice <= 15000) {
    console.log("Скидка не предусмотрена");
} else {
    console.log("Что-то пошло не так");
}
