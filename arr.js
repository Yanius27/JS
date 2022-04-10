const arr = [[{id: 1.1, isActiv: true,}, {id: 1.2, isActiv: true,}], [{id: 2.1, isActiv: false,}], [{id: 3.1, isActiv: true,}, {id: 3.2, isActiv: false}], [{id: 4.1, isActiv: true}]];

let garbage = [];
let approved =[];

function search(elem) {
  Array.isArray(elem) ? elem.forEach(search) : objFunc(elem);
}

function objFunc(elem) {
  if(elem.isActiv) {
    elem.status = 'approved';
    elem.date = new Date();

    approved.push(elem);
  }
  else {
    garbage.push(elem);
  }
}

search(arr);

console.log('                                 ');
console.log('=========approved array=========');
console.log(approved);
console.log('                                 ');
console.log('==========garbage array==========');
console.log(garbage);
