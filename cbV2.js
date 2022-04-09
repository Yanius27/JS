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
  isActiv: false,
  date: new Date(),
})); //С помощью метода .map и spread-оператора создаём новый массив со
//сброшенными статусами и новым свойством Date

const onlyActiv = applications.filter(elem => elem.isActiv).map(elem => ({
  ...elem,
  date: new Date(),
})); //С помощью метода .filter отбираем объекты со свойством isActiv: true,
//с помощью метода .map и spread-оператора создаём новый массив с отфильтрованными
//объектами и добавляем новое свойство Date

console.log(applications);
console.log(resetStatus);
console.log(onlyActiv);