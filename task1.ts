const name: string = "Александр";

const text: string = `Я, ${name}, учу TYPESCRIPT`;

//Написать программу, которая выводит text в нижнем регистре с вашим именем, если имя не совпадает, то заменить его

const yourName: string = "Карина";

if (text.includes(yourName)) {
  console.log(text.toLowerCase());
} else {
  const result = text.slice(0, text.indexOf(name)) + yourName + text.slice(text.indexOf(name) + name.length);
  console.log(result.toLowerCase());
}
