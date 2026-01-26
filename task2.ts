const num1: number = 0.7767667;
const num2: number = 3.2232332;

//Написать программу, которая выведет целочисленную сумму двух чисел, для оптимизации - сделать проверку на целое число

const newNum = num1 + num2;

if (Number.isInteger(newNum)) {
  console.log(newNum);
} else {
  console.log(newNum.toFixed());
}
