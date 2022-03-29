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
];

let app = [];
let unApp = [];
function isApprovedOrNot(elem) {
  elem.isActiv === true ? app.push(elem) : unApp.push(elem);
}

function mainFunc(arr, cb) {
  Array.isArray(arr) && arr.forEach(cb); 
}

mainFunc(applications, isApprovedOrNot);

console.log(app);
console.log(unApp);