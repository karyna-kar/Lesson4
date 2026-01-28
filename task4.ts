const order = "Order#1456; date=2026-01-26 09:07:05; amount=15.3";

// преобразовать строку в формат:
// Заказ № 1456 от 26/01/2026 09:07 на сумму 16 рублей

//parse orderNumber
const orderNumber = order.slice(order.indexOf("#") + 1, order.indexOf(";"));

//parse date
const parsedDate = order.slice(order.indexOf("date=") + "date=".length, order.lastIndexOf(";"));
const date = new Date(parsedDate);
const day = date.getDate().toString().padStart(2, "0");
const month = (date.getMonth() + 1).toString().padStart(2, "0");
const year = date.getFullYear().toString().padStart(2, "0");
const hours = date.getHours().toString().padStart(2, "0");
const minutes = date.getMinutes().toString().padStart(2, "0");

//parse order amount
const amount = order.slice(order.indexOf("amount=") + "amount=".length);
const finalAmount = Math.ceil(Number.parseFloat(amount));

console.log(`Заказ № ${orderNumber} от ${day}/${month}/${year} ${hours}:${minutes} на сумму ${finalAmount} рублей`);
