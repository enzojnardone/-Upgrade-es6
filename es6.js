console.log('JS ES6');

// Iteración #1: Arrows
// Crea una arrow function que tenga dos parametros a y b y 
// que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
// por consola la suma de los dos parametros.

const newFunction = (a =10, b=5) => {
    console.log(a +b);
}

// 1.1 Ejecuta esta función sin pasar ningún parametro

newFunction();

// 1.2 Ejecuta esta función pasando un solo parametro

newFunction(20);

// 1.3 Ejecuta esta función pasando dos parametros

newFunction(30, 70);

// Iteración #2: Destructuring
// 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
// del objeto usando object destructuring e imprimelas por consola. Cuidado, 
// no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

let {title, gender, year} = game;

console.log(game.title);
console.log(game.gender);
console.log(game.year);

// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1, fruit2, fruit3);

// 2.3 En base al siguiente javascript, usa destructuring para crear 2 
// variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

let {name, race} = animalFunction();

console.log(name);
console.log((race));

// 2.4 En base al siguiente javascript, usa destructuring para crear las 
// variables name y itv con sus respectivos valores. Posteriormente crea 
// 3 variables usando igualmente el destructuring para cada uno de los años 
// y comprueba que todo esta bien imprimiendolo.

const car = {carModel: 'Mazda 6', itv: [2015, 2011, 2020]}

let {carModel, itv} = car;
let [year1, year2, year3] = itv;

console.log(carModel);
console.log(itv);
console.log(year1);
console.log(year2);
console.log(year3);