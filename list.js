let data = [['Adam', 'doctor', 32], ['Maria', 'teacher', 27], ['Leon', 'manager', 23], ['Mattew', 'builder', 35]];
//Должна выводить в консоль только числа из массива
function isNumber(value) {
  for(let i = 0; i < 4; i ++){
    for(let n = 0; n < 3; n ++){
      if(typeof(value[i][n] == 'number')) console.log(value[i][n]);
      else continue;
    }
  }
}
isNumber(data);