// #Définition de variables
let nom = 'John';
console.log(nom)

nom = 'Jane'
console.log(nom)

// #Boucles
for(let i=1;i<=10;i++) {
    console.log(i)
}

// #console.log()
console.log('Bonjour tout le monde!')
console.log((3+4))
console.log(nom)

// #Concaténation de chaînes de caractères
let firstName = 'John';
let lastName = 'Doe';

let complete = `${firstName} ${lastName}`;
console.log(complete)

// #Conditions
let age=18;

if(age>=18) {
    console.log('Vous êtes majeur');
}
else if(age<18) {
    console.log('Vous êtes mineur');
}

// Avancé

couleurs = ["rouge", "vert", "bleu", "jaune", "orange"]
for (let i=0; i < couleurs.length; i++) {
    console.log(couleurs[i])
}

// #Utilisation de Array.push() et Array.pop()
const number = [1, 2, 3, 4, 5]
number.push(6)
number.pop()
console.log(number)

// #Fonctions
