const totalNames = prompt("Saisissez chaques noms");
const names = [];
for (let i = 0; i < parseInt(totalNames); i++) {
    names.push(prompt("Saississez un nouveau nom"));
}   

let messageConfirm = `Vous avez ${names.length} prénoms qui sont : ${names}`;
console.log(messageConfirm)
if(totalNames >=3) {
    console.log("Vous avez beaucoup de noms")
}



