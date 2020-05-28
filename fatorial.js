/*
Exercício:
Escreva uma função fatorial, que calcule o fatorial de um número.
 */
function fatorial(num){
    if (num === 0 || num == 1){
        return 1;
    }
    var multiplicacao = 1;
    for(i = num; i > 1; i--){
        multiplicacao = multiplicacao * i;
    }
    return multiplicacao;
}