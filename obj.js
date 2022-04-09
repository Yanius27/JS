/*const dog = {
  name: 'Woofler',
  age: 7,
  skills: 'break everything',
};

console.log(`Special skills of ${dog.name} is ${dog.skills}`);


dog.breed = 'husky';


console.log(`${dog.name} is ${dog.breed}`);

const cat = {
  name: 'Mr.Doodle',
  age: 4,
  skills: 'being the biggest clean-up in the world',
}

console.log(`Special skills of ${cat.name} is ${cat.skills}`);

 cat.friend = dog.name;

 console.log(`The biggest friend of ${cat.name} is ${cat.friend}`);*/

class dog {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  sayYourName() {
    console.log(this.name);
  }

  barkCommand() {
    console.log(this.sound);
  }
  
}

let dog1 = new dog('Spike', 'Bark!');

dog1.sayYourName();
dog1.barkCommand();

let dog2 = new dog('Chi-chi', 'berk-berk');

dog2.sayYourName();
dog2.barkCommand();