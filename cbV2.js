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

const resetStatus = applications.map(elem => ({
  ...elem,
  isActiv: false
}));

/*const onlyActiv = applications.filter(elem => ({
  ...elem
  isActiv: true
}));*/

console.log(resetStatus);
console.log(applications);
//console.log(onlyActiv);