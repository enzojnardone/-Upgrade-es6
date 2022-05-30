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

// Iteración #3: Spread Operator

// 3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43]
let pointsListCopy = [...pointsList];

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
let toyCopy = {...toy};

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
// spread operatos.

const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsLis3 = [54,87,99,65,32];

let newList = [...pointsList2, ...pointsLis3]
console.log(newList);

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
// con spread operators.

const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

let newToyObject = {...toy2, ...toyUpdate};
console.log(newToyObject);

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
// pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

let colorsCopy = [...colors];
colorsCopy.splice(1, 1);
console.log(colorsCopy);

// **Iteración #4: Map**

// 4.1 Dado el siguiente array, devuelve un array con sus nombres 
// utilizando .map().

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

let userNames = users.map(user => user.name);
console.log(userNames);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.

const namesWithA = users.map( user => {
    if(user.name.startsWith("A")){
        user.name = "Anacleto";
    }
    return user.name;
});

console.log(namesWithA);

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const visitedCities = cities.map(city => {
    if(city.isVisited){
        city.name += " (Visitado)";
    }
    return city.name;
});

console.log(visitedCities);

// Iteración #5: Filter

// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const overEighteen = ages.filter(age => {
    if(age>18){
        return age;
    }
});

console.log(overEighteen);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.
// const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const matchNumber = ages.filter(age => {
    if(age%2==0){
        return age;
    }
});

console.log(matchNumber);

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
]

const leagueOgLengeds = streamers.filter((item) => {
    if (item.gameMorePlayed === "League of Legends"){
        return item
    }
})

console.log(leagueOgLengeds);

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// usar la funcion .includes() para la comprobación.

const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamer = streamers2.filter((item) => {
    if (item.name.includes('u')) {
        return item
    }
})

console.log(streamer);

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
// .age sea mayor que 35.

const streamers3 = streamers.filter(streamer => {
    if(streamer.gameMorePlayed.includes("Legends")) {
        if(streamer.age > 35) {
            let game = streamer.gameMorePlayed;
            streamer.gameMorePlayed = game.toUpperCase();
        }
        return streamer;
    }
});
console.log(streamers3);