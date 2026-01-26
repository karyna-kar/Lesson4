const name: string = "Александр";

const text: string = `Я, ${name}, учу TYPESCRIPT`;

//Написать программу, которая выводит text в нижнем регистре с вашим именем, если имя не совпадает, то заменить его

const yourName: string = "Карина";

if (text.includes(yourName)) {
  console.log(text.toLowerCase());
} else {
  const indexName = text.indexOf(name);
  const result = text.slice(0, indexName) + yourName + text.slice(indexName + name.length);
  console.log(result.toLowerCase());
}
