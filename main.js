// console.log('Buenos días')
/*console.error('Esto es un error')
console.warn('esto es un warning')*/
// alert('holaa')
// console.log('ey')
// const variable = 10
// console.log(variable + 30)
// var dato
// console.log(dato)
// dato = 10
// console.log(dato)
// dato = 9
// console.log(dato)

// const firstName = "Euralio";
// const age = 32;
// const isCool = true;
// const x = null ;
// const y = undefined;
// let z; // undefined

// console.log(typeof age)

// Concatenation
// console.log("My name is " + firstName + " and I am " + (20 + age) + " years old");
// Template literal
// console.log(`My name is ${firstName} and I am ${age}`);
// const variable2 = "Soy Euralio y tengo " + " "+ 10+ " años"
// console.log(variable2 + " y me gusta hacer caños")

const s = "Hello World";
let val;
// val = s
// val = s.length;

// val = s.toUpperCase();
// val = s.toLowerCase();

// val = s.substring(0, 7);

// val = s.split("");
// console.log(val.reverse().join(""))
// console.log(val)

// const numbers = [1,2,3,7,5];
// const fruits = ['apples', 'oranges', 'pears', 'grapes'];
// const numbersAndFruits = ['apples',10, 'oranges', 8,9,true]
// // console.log(fruits[3].split("").reverse().join("").substring(0,3))
// // console.log(fruits[3][5])
// numbersAndFruits[6] ="pepinos"
// numbersAndFruits.push("manzana")
// numbersAndFruits.unshift("mangos");


// numbersAndFruits.pop();
// numbersAndFruits.push("manzana")

// numbersAndFruits.splice(0, 1)
// console.log(numbersAndFruits)

const person = {
    name: "Edu",
    age: 30,
    hobbies: ["music", "movies", ["futbol","baloncesto",{ name:"pádel",tipo:["individual","duos"]},"esgrima","boxeo"],{ name:"programming",  time:10  }],
    address: {
      street: "50 Main st",
      city: "Boston",
      state: "MA",
    },
  };

  person.email = "edu@gmail.com"
  person.hobbies[2][2].tipo[1] = "parejas"
  console.log(person)
  console.log(person.hobbies[2][2].tipo[1])
