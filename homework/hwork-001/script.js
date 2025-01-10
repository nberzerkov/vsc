const myName = "Никита";
const helloWorld = `Hello, ${myName}`;
const timeLog = new Date().toLocaleString();

const fullText = `Привет! Я открылся с дэлеем в 1000 мс! Меня зовут ${myName}! Твоё текущее время ${timeLog}`;

setTimeout(() => alert(fullText), 1000);
