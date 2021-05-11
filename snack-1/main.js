/*
Snack 1:
Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
nome e
peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const bici =[
    {
        nome : 'scott',
        peso : 8.7
    },
    {
        nome : 'bianchi',
        peso : 9
    },
    {
        nome : 'specialized',
        peso : 8.5
    },
    {
        nome : 'merida',
        peso : 9.2
    }
];

const pesiBici = [];

for (let i = 0; i < bici.length; i++) {
    const pesoObj = bici[i].peso;
    pesiBici.push(pesoObj);
    const pesoMin = Math.min(...pesiBici);

    if (pesoObj === pesoMin) {
       var {nome, peso} = bici[i]
    }
}
console.log(`La bici ${nome} è la più leggera, pesa: ${peso} kg`);

