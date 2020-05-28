/*
Necessitamos uma função maisMenos que receba um array e retorne outro com os seguintes três números:
1- na primeira posição, a fração de números que são positivos
2- na segunda posição, a fração de números que são zero
3- na última posição, a fração de números que são negativos
Por exemplo, maisMenos([1, 2, 0, -1]) deveria retornar [0.5, 0.25, 0.25], devido a que há 50% de positivos,
25% de zeros, e 25% de negativos.
 */

function maisMenos(array){
    var positivos = 0;
    var zeros = 0;
    var negativos = 0;
    for (var i = 0; i < array.length; i++){
        if(array[i] > 0){
            positivos += 1;
        }
        if(array[i] === 0){
            zeros += 1;
        }
        if (array[i] < 0){
            negativos += 1;
        }
    }
    positivos = positivos / array.length;
    zeros = zeros / array.length;
    negativos = negativos / array.length;
    novoArray = [positivos, zeros, negativos];
    return novoArray
}