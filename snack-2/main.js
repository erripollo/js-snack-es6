/*
Snack2:
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const squadre = [
    {
        nome : 'bulls',
        punti_fatti : 0,
        falli_subiti : 0
    },
    {
        nome : 'lakers',
        punti_fatti : 0,
        falli_subiti : 0
    },
    {
        nome : 'spurs',
        punti_fatti : 0,
        falli_subiti : 0
    },
    {
        nome : '76ers',
        punti_fatti : 0,
        falli_subiti : 0
    },
    {
        nome : 'rockets',
        punti_fatti : 0,
        falli_subiti : 0
    }
]
console.log(squadre);

const falli = [];

for (var i = 0; i < squadre.length; i++) {
    squadre[i].punti_fatti = getRandomNumber(0, 100);
    squadre[i].falli_subiti = getRandomNumber(500, 2000);
    console.log(squadre[i]);

    const {nome, falli_subiti} = squadre[i];
    falli.push({nome, falli_subiti})
}

console.log(falli);

for (var i = 0; i < falli.length; i++) {
    console.log(falli[i]);
}



