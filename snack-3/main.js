/*
Snack 3:
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
:collisione: Usiamo i nuovi metodi degli array foreach o filter.
*/

/**
 * ## Valori compresi tra "a" e "b" (foreach mode)
 * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
 * @param {Array} list array da cui estrapolare gli elementi
 * @param {Number} a a < b
 * @param {Number} b b < list.length
 * @returns {Array} array con valori compresi tra "a" e "b"
 */
function betweenPositionsWithForeach (list, a, b) {
    const extractList = [];
    list.forEach((element, i, list) => {
        if (i >= a && i <= b && b < list.length) {
            extractList.push(element);
        }
    });
    return extractList
};

/**
 * ## Valori compresi tra "a" e "b" (filter mode)
 * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
 * @param {Array} list array da cui estrapolare gli elementi
 * @param {Number} a a < b
 * @param {Number} b b < list.length
 * @returns {Array} array con valori compresi tra "a" e "b"
 */
function betweenPositionsWithFilter (list, a, b) {
    const extractList = list.filter((element, i, list) => {
        if (i >= a && i <= b && b < list.length) {
            return true;
        }
        return false;
    })
    return extractList;
};


const names = ['enrico', 'giulia', 'andrea', 'ettore', 'giulio', 'alessandra', 'valerio', 'davide', 'fabio'];

const cities = ['torino', 'milano', 'bologna', 'londra', 'brcellona', 'monaco', 'parigi', 'porto', 'lisbona']

console.log(betweenPositionsWithForeach(names, 3, 6));

console.log(betweenPositionsWithFilter(cities, 4, 5));


