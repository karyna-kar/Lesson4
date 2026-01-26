//Вывести сегодняшнюю дату в формате:
//День/Месяц/Год Часы:Минуты:Секунду - Например 02/05/2026 22:15:30

const dateNow = new Date();
const day = dateNow.getDate().toString().padStart(2, "0");
const month = (dateNow.getMonth() + 1).toString().padStart(2, "0");
const year = dateNow.getFullYear().toString().padStart(2, "0");
const hours = dateNow.getHours().toString().padStart(2, "0");
const minutes = dateNow.getMinutes().toString().padStart(2, "0");
const seconds = dateNow.getSeconds().toString().padStart(2, "0");
console.log(`${day}/${month}/${year} ${hours}:${minutes}:${seconds}`);
