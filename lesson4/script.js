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

// if (fullPrice > 30000) {
//     servicePercentPrice = Math.round(fullPrice * 0.1);
//     console.log("Остаток процента: " + servicePercentPrice);
// } else if (fullPrice > 15000 && fullPrice <= 30000) {
//     servicePercentPrice = Math.round(fullPrice * 0.05);
//     console.log("Остаток процента: " + servicePercentPrice);
// } else if (fullPrice > 0 && fullPrice <= 15000) {
//     console.log("Скидка не предусмотрена");
// } else {
//     console.log("Что-то пошло не так");
// }


let allServicePrices;
let fullPrice;
let servicePercentPrice;

// Объявить функцию getAllServicePrices. Функция возвращает сумму всех дополнительных услуг. 
// Результат сохраняем в переменную allServicePrices. Тип - function expression
const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2
}

allServicePrices = getAllServicePrices();

//Объявить функцию getFullPrice. Функция возвращает сумму стоимости верстки и стоимости дополнительных услуг (screenPrice + allServicePrices). 
// Результат сохраняем в переменную fullPrice. Тип - function declaration
function getFullPrice() {
    return screenPrice + allServicePrices
}

fullPrice = getFullPrice();



//Объявить функцию getTitle. Функция возвращает title меняя его таким образом: первый символ с большой буквы, остальные с маленькой". 
// Учесть вариант что строка может начинаться с пустых символов. " КаЛьКулятор Верстки"
function getTitle() {
    let trimmTitle = title.trim();

    if (trimmTitle === "") {
        return "";
    }

    let firstChar = trimmTitle.charAt(0).toUpperCase();
    let restChars = trimmTitle.slice(1).toLowerCase();

    return firstChar + restChars;
}

//Объявить функцию getServicePercentPrices. Функция возвращает итоговую стоимость за вычетом процента отката.
//  Результат сохраняем в переменную servicePercentPrice (итоговая стоимость минус сумма отката)
function getServicePercentPrices() {
    if (fullPrice > 30000) {
        servicePercentPrice = Math.round(fullPrice * 0.1);
    } else if (fullPrice > 15000 && fullPrice <= 30000) {
        servicePercentPrice = Math.round(fullPrice * 0.05);
    } else if (fullPrice > 0 && fullPrice <= 15000) {
        servicePercentPrice = 0;
    } else {
        console.log("Что-то пошло не так");
        return;
    }

    return fullPrice - servicePercentPrice;
}

servicePercentPrice = getServicePercentPrices();


//Почистить консоль логи и добавить недостающие, должны остаться:
// - вызовы функции showTypeOf
// - вывод строки с типами экранов для разработки screens
// - сообщение о скидке пользователю (вызовы функции getRollbackMessage)
// - стоимость за вычетом процента отката посреднику (вызовы функции getServicePercentPrices)
function showTypeOf(variable, variableName) {
    console.log("Тип переменной " + variableName + ": " + typeof variable);
}

function getRollbackMessage() {
    if (fullPrice > 30000) {
        return "Даем скидку в 10%";
    } else if (fullPrice > 15000 && fullPrice <= 30000) {
        return "Даем скидку в 5%";
    } else if (fullPrice > 0 && fullPrice <= 15000) {
        return "Скидка не предусмотрена";
    } else {
        return "Что-то пошло не так";
    }
}