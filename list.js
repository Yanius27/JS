let data = ['Adam', 'doctor', 32, 'Maria', 'teacher', 27, 'Leon', 'manager', 23, 'Mattew', 'builder', 35];
//Должна выводить в консоль только числа из массива
let numbers = [];
data.forEach(item => {
  if(typeof(item) === 'number') numbers.push(item);
  });
  console.log(numbers);