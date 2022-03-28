const orders = [ 
{
  id: 1,
  isActiv: true,
  child: [ 
  {
    title: 'test',
    isActiv: true,
    child: [ 
    {
      title: 'test',
      isActiv: false,
      child: []
    } 
    ]
  }
  ]
},
{
  id: 2,
  isActiv: false,
  child: [
  {
    title: 'test2',
    isActiv: false,
    child: [
    {
      title: 'test',
      isActiv: true,
      child: []    
    }    
    ]
  }      
  ]  
}
]

let isApproved = [];
let isUnApproved = [];

function pushElem(elem) {
  orders.isActiv == true ? isApproved.push(elem) : isUnApprovrd.push(elem);
}

function isMassiv(elem) {
  Array.isArray(elem) ? elem.forEach(isMassiv) : pushElem;
}

isMassiv(orders);
console.log(isApproved);
console.log(isUnApproved);