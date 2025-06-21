//1

const ingredients = prompt("Введіть назву напою:(Кава,Сік,Чай)");

switch (ingredients) {
  case "Кава":
    alert("Ваш напій - кава!");
    break;
  case "Сік":
    alert("Ваш напій - сік!");
    break;
  case "Чай":
    alert("Ваш напій - чай!");
    break;
  default:
    alert("Будь ласка введіть правильно назву напою(Кава,Сік,Чай)");
}

//2

const weekDays = prompt("Введіть день тижня:");

switch (weekDays) {
  case "Понеділок":
  case "Вівторок":
  case "Середа":
  case "Четвер":
  case "П'ятниця":
    alert("Це робочий день");
    break;
  case "Субота":
  case "Неділя":
    alert("Це вихідний");
    break;
  default:
    alert("Введіть правильно назву дня тижня!");
}

//3

const numberMonth = prompt;

switch (numberMonth) {
    case "Грудень":
    case "Січень":
    case "Лютий":
        alert("Це місяць пори року - зими");
        break;
    case "Березень":
    case "Квітень":
    case "Травень":
        alert("Це місяць пори року - весни");
        break;
    case "Червень":
    case "Липень":
    case "Серпень":
        alert("Це місяць пори року - літа");
        break;
    case "Вересень":
    case "Жовтень":
    case "Листопад":
        alert("Це місяць пори року - осені");
        break;
    default:
        alert("Введіть правильно назву місяця!");
}

//4

const colors = prompt("Виберіть колір:(Червоний,Жовтий,Зелений)");
switch (colors) {
    case "Червоний":
        alert("Стоп");
    case "Жовтий":
        alert("Чекати");
    case "Зелений":
        alert("Йти");
    default:
        alert("Будь ласка введіть правильно колір(Червоний,Жовтий,Зелений)");
}

//5

let result;
const num1 = Number(prompt("Введіть перше число:"));
const operator = prompt("Введіть оператор:(+,-,/,*)");
const num2 = Number(prompt("Введіть друге число:"));

switch (operator) {
    case "+":
        result = num1 + num2;
        alert(`Результат:${result}`);
        break;
    case "-":
        result = num1 - num2;
        alert(`Результат:${result}`);
        break;
    case "/":
        result = num1 / num2;
        alert(`Результат:${result}`);
        break;
    case "*":
        result = num1 * num2;
        alert(`Результат:${result}`);
        break;
    default:
        alert("Десь помилка..");
}