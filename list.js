let data = [['Adam', 'doctor', 32], ['Maria', 'teacher', 27], ['Leon', 'manager', 23], ['Mattew', 'builder', 35]];
//Должна выводить в консоль только числа из массива

let numbers = [];
//новый массив для возрастов

function pushElem(value) {
  typeof(value) === 'number' && numbers.push(value);
}//функция которая проверяет, является ли элемент числом и пушит его в новый массив, если да

function findArray(value) {
  Array.isArray(value) && value.forEach(pushElem);
}//проверяет,является ли элемент массивом и вызывает коллбэк, если да

data.forEach(findArray);
//метод для двухмерного массива
console.log(numbers);