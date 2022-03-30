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
function isApproved(elem) {app.push(elem)};

function orNotApproved(elem) {unApp.push(elem)};

function mainFunc(arr, cb1, cb2) {
  Array.isArray(arr) && arr.forEach(function status(arr) {
    arr.isActiv === true ? cb1 : cb2;
  }); 
}

mainFunc(applications, isApproved, orNotApproved);

console.log(app);
console.log(unApp);