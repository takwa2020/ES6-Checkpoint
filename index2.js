const pets = [
  { name: 'Max', type: 'dog', bornOn: 2018 },
  { name: 'Angel', type: 'cat', bornOn: 2015 },
  { name: 'Jasper', type: 'dog', bornOn: 2016 }
];

function getAge(pet) {
  return new Date().getFullYear() - pet.bornOn;
}

const isAge = function (pet){
	return pet.age =getAge(pet);
}
const petsWithAge = pets.map(isAge);
console.log(petsWithAge);

const isDog = function(pet){
 	return pet.type === 'dog';
}
const dogs = pets.filter(isDog);
console.log(dogs);

const hisName = function (pet){
	return pet.name == 'Jasper';
}
const jasper = pets.find(hisName);

console.log("Jasper is " + jasper.age + " years old");