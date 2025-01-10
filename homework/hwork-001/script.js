const myName = "Nikita";
const helloWorld = `Hello, ${myName}`;
const timeLog = new Date().toLocaleString();

const fullText = `Привет! Меня зовут ${myName}! Текущее время ${timeLog}`;

setTimeout(() => alert(fullText), 1000);
