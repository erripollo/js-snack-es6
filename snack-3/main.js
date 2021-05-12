/*
Snack 3:
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
:collisione: Usiamo i nuovi metodi degli array foreach o filter.
*/

/**
 * ## Valori compresi tra "a" e "b"
 * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
 * @param {Array} list array da cui estrapolare gli elementi
 * @param {Number} a a < b
 * @param {Number} b b < list.length
 * @returns {Array} array con valori compresi tra "a" e "b"
 */
function betweenPositions (list, a, b) {
    const extractList = [];
    list.forEach((element, i, list) => {
        if (i >= a && i <= b && b < list.length) {
            extractList.push(element);
        }
    });
    return extractList
};

var names = ['enrico', 'giulia', 'andrea', 'ettore', 'giulio', 'alessandra', 'valerio', 'davide', 'fabio'];

console.log(betweenPositions(names, 3, 6));