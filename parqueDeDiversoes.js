/*
Exercício
Defina a função podeSubir, recebendo 3 parâmetros: alturaPessoa (numero), vemComCompania (booleano),
temProblemaCardiaco (booleano), retorne true ou false conforme o caso. Levar em conta as condições
necessárias mencionadas abaixo.
- Atingir a altura mínima de 1,5 m (ou 1,2 m, se acompanhada por um adulto).
- Não ter qualquer problema cardíaco.
*/

function podeSubir(alturaPessoa, vemComCompania, temProblemaCardiaco){
    if (temProblemaCardiaco === true){
        return false;
    }
    if (alturaPessoa >= 1.5 || (alturaPessoa >= 1.2 && vemComCompania === true)){
        return true;
    }
    return false;
}

console.log(podeSubir(1.3, false,false));
console.log(podeSubir(1.1, true,false));
console.log(podeSubir(1.8, false,true));