console.groupCollapsed('Basic');
// alert('Labas');
// console.log('labas');
// console.log('labas');

// kintamuju iniciavimo zodis: var, let, const

// var vardas = "John"; //string del kabuciu
// const asmensKodas = 393333333; //number
// let miestas = `Kaunas.`; //string
// let amzius = 28; // number
// let yraStudentas = true; // Boolean true or false tipo kontamasis




// console.log(vardas);
// console.log(miestas);
// console.log(amzius);
// console.log(asmensKodas);


// typeof kokio tipo duomenys

console.log(typeof vardas);

// alert('Labas');
// console.log('labas');
// console.log('labas');

// kintamuju iniciavimo zodis: var, let, const

var vardas = "John"; //string del kabuciu
let pavarde = "Doe"; //string del kabuciu
const asmensKodas = 393333333; //number
let miestas = `Kaunas.`; //string
let amzius = 28; // number
let yraStudentas = true; // Boolean true or false tipo kontamasis
let goodMorning = "Good morning"



console.log(vardas);
console.log(miestas);
console.log(amzius);
console.log(pavarde);
console.log(asmensKodas);


// typeof kokio tipo duomenys

console.log(typeof vardas);

console.log(vardas + ' ' + pavarde + ' (amžius' + amzius + ' m.), asmens kodas:' + asmensKodas + ', gyvenamasis miestas: ' + miestas);

console.log(`${vardas} ${pavarde} (amžius ${amzius} m.), asmens kodas: ${asmensKodas}, gyvenamasis miestas: ${miestas}`);

console.log(`John said: "Good morning".`);
console.log("John said: 'Good morning'.");
console.log(`${vardas} said: "${goodMorning}".`);

// That's my car.

// console.log(`John said: "That's my car".`);

// console.log('John said:' + ` "That's my car".`);
// console.log("John said:" + ` "That's my car".`);


// console.log("John `said`:" + `"That's my car".`);
// console.log('John `said`:' + '"That\'s my car".');
// console.log(`John` +" `said`:" + '"That\'s my car".');


// console.log(`John \`said\`: "That's \\my\\ car".`);
// console.log("John \`said\`: \"That's \\my\\ car\".");
// console.log('John \`said\`: \"That\'s \\my\\ car\".');

// John \`said\`: "That's my car".
// console.log('John \\\`said\\\`: "That\'s my car".');
// console.log("John \\\`said\\\`: \"That\'s my car\".");
// console.log(`John \\\`said\\\`: \"That\'s my car\".`);

console.groupEnd();


let light = 'yellow';
console.log(light === 'green');


if (light === 'green') {
    console.log('Galim eiti');
} else if (light === 'yellow') {
    console.log('pasiruosti');
} else if (light === 'red') {
    console.log('negalima eiti');
} else {
    console.log('sugedo');
}

