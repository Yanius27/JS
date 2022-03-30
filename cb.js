const applications = [
  {id: 1, isActiv: true},
  {id: 2, isActiv: false},
  {id: 3, isActiv: true},
  {id: 4, isActiv: true},
  {id: 5, isActiv: false},
  {id: 6, isActiv: false},
  {id: 7, isActiv: true},
  {id: 8, isActiv: false},
  {id: 9, isActiv: true},
  {id: 10, isActiv: false},
]; //Массив объектов с заявками

let app = []; //Новый массив для активных заявок
let unApp = []; //Новый массив для неактивных заявок

function isApproved(elem) {app.push(elem)}; //1-ая функция коллбэк

function orNotApproved(elem) {unApp.push(elem)}; //2-ая функция коллбэк

function mainFunc(arr, cb1, cb2) {
  Array.isArray(arr) && arr.forEach(function status(elem) {
    elem.isActiv === true ? cb1(elem) : cb2(elem);
  }); 
} //Основная функция с проверками, методом массива и вызовом коллбэков

mainFunc(applications, isApproved, orNotApproved); //Вызов основной функции

console.log(app);
console.log(unApp);