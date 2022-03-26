let entrants = [['Adam Parker', 3], ['Ned Kelly', 4], ['Saorsia Spinning', 5], ['Charlie Jhones', 5], ['Samantha M. Strong', 4], ['Simon Drake', 3], ['Mindie Takker', 3], ['Yan Shein', 4], ['Trevor Lloyd', 5], ['Lora Shablinski', 4]];

let students =[];

function congrats (elem) {
typeof elem === 'number' && elem >  3 && students.push(elem[0]);
} //проверяет, является ли элемент числом и если он больше 3, добавляет строку из данного массива в новый массив

function isListRec (elem) {
if(Array.isArray(elem)) ? entrants.forEach(isListRec) : congrats;
} //проверяет, является ли элемент массивом и запускает метод

isListRec(entrants);

console.log(students);
