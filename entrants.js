let entrants = [['Adam Parker', 3], ['Ned Kelly', 4], ['Saorsia Spinning', 5], ['Charlie Jhones', 5], ['Samantha M. Strong', 4], ['Simon Drake', 3], ['Mindie Takker', 3], ['Yan Shein', 4], ['Trevor Lloyd', 5], ['Lora Shablinski', 4]];

let students =[];

function insideList(elem) {
  elem.length === 2 && typeof elem[0] === 'string' && elem[1] > 3 && students.push(elem[0]);
} //проверяет, является ли элемент числом и если он больше 3, добавляет строку из данного массива в новый массив

function listRec(elem) {
  Array.isArray(elem) && elem.forEach(insideList);
} //проверяет, является ли элемент массивом и запускает метод

listRec(entrants);

console.log(students);