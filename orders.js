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
  id: 2
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

let isActiv = [];
let isPassiv = [];

function pushElem(elem) {
  
}

function isMassiv(elem) {
  Array.isArray(elem) && elem.forEach(isMassiv) && pushElem;
}