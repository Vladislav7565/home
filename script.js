function registers() {
    

const loginClients = "Bibas";
const passwordClients = "pazik12";

let inputLogin = prompt("Введіть логін");
if (inputLogin === loginClients) {
    let inputLogin = prompt ("Введіть свій пароль");
    
    const result = inputLogin === passwordClients ? "Вітаю,ви ввійшли в профіль" :
    "Невірний пароль";
console.log(result);
}
else if (inputLogin === null || inputLogin === "") {
    console.error("Скасовано");
    
}
else {
    console.error("Я вас незнаю");
}
}
