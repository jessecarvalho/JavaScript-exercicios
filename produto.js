/*
Exercício:
Necessitamos uma função produto que receba um array de números e retorne o produto: o resultado de multiplicar todos
os elementos entre si.
Por exemplo, produto([1, 4, 7]) deve retornar 28, que é 1 * 4 * 7.
 */

function produto(numeros){
    let multiplicacao = 1;
    for (let i = 0; i < numeros.length; i++){
        multiplicacao = multiplicacao * numeros[i];
    }
    return multiplicacao;
}