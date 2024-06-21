//Завдання 1

const messageOne = prompt("будь ласка напишіть щось!");
const messageTwo = prompt("будь ласка напишіть щось!");

if (!messageOne || !messageTwo === ""){
  alert("Ви не заповнили поля!");
} else {
  alert("Поля заповнені!");
};

//Завдання 2

let numberOne = prompt("Введіть перше число!");
let numberTwo = prompt("Введіть друге число!");

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

const sumNumbers = numberOne + numberTwo;

if (sumNumbers > 10){
  alert("Сума більша за 10");
} else {
  alert("Сума менше за 10 або дорівнює 10");
};

//Завдання 3

const text = prompt("Напишіть JavaScript")

if (text.includes("JavaScript")) {
    alert("Текст містить слово JavaScript");
} else {
    alert("Текст не містить слово JavaScript");
}

//Завдання 4

const messageNumber = prompt("Впишіть число від 1 до 100");

if (messageNumber > 10 && messageNumber < 20) {
  alert("Число входить в діапазон від 10 до 20");
} else {
    alert("Число не входить в діапазон від 10 до 20")
}

//Завдання 5

const userName = "kleryxx";
const email = "vlad.lipinkiy@gmail.com";
const password = "111111";

let messageUserName = prompt("Введіть Ім'я!");
let messageEmail = prompt("Введіть електрону пошту!");
let messagePassword = prompt("Введіть пароль!");

const userNameLength = userName.length;
const emailFirstNeed = email.indexOf("@");
const emailSecondNeed = email.indexOf(".");
const passwordLength = password.length;

let firstCondition = "";
let secondCondition = "";
let thirdCondition = "";

if (userNameLength >= 3) {
  firstCondition = true;
} else {
  firstCondition = false;
}

if (emailFirstNeed >= 1 && emailSecondNeed >= 1) {
  secondCondition = true;
} else {
  secondCondition = false;
}

if (passwordLength >= 6) {
  thirdCondition = true;
} else {
  thirdCondition = false;
}

if (firstCondition && secondCondition && thirdCondition === true) {
  alert("Зараз Вас перенаправить на іншу сторінку!");
} else {
  alert("Помилка! Данні заповнені неправильно");
}
