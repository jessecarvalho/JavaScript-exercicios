//Exercicio:
//Defina a função eMaior, que recebe dois números por parâmetro, e retorna o maior entre eles.

function eMaior(numeroA, numeroB){
    if (numeroA > numeroB){
        return numeroA;
    } else{
        return numeroB;
    }
}

console.log(eMaior(1,2));
console.log(eMaior(97,74));
console.log(eMaior(3,12));

