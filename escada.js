/*
Queremos representar uma escada com altura variável, utilizando um array de strings. Por exemplo, uma escada com
altura 3, representaremos com o seguinte array:

var escada3 = [
 "  #",
 " ##",
 "###"
]

E uma escada com altura 5, da seguinte forma:

var escada5 = [
 "    #",
 "   ##",
 "  ###",
 " ####",
 "#####"
]
Escreva uma função escada que utilize uma altura (um número) e retorne um array que represente a escada correspondente.
 */

function escada(altura){
    arrayEscada = [];
    for(var i = 1; i <= altura; i++){
        var degrau = " ".repeat(altura-i)+"#".repeat(i);
        arrayEscada.push(degrau);
    }
    return arrayEscada;
}