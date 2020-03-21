const pets = [
    { name: 'Max', type: 'dog', bornOn: 2018 },
    { name: 'Angel', type: 'cat', bornOn: 2015 },
    { name: 'jasper', type: 'dog', bornOn: 2016 }
  ];
  const getAge = pet=>{
    return new Date().getFullYear() - pet.bornOn
    };
    pets.forEach((pet)=>{ pet.age = getAge(pet)})
    console.log("pets With Age", pets);
  const dogs = pets.filter(pet => pet.type === "dog")
  console.log(dogs)
  const a = pets.find(a => a.name == 'jasper')
  console.log(a)
