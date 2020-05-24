//Exercício:
//Primeiro de tudo precisamos saber que um banco está fechado quando é fim de semana (sábado ou domingo)
//e não está no horário bancário (9 às 15hs).
//Defina a função possoIrAoBanco que, receba dois parâmetros, o primeiro é diaDaSemana (string)
//e o segundo horaAtual(numero), a função deve retornar true, apenas se o banco estiver aberto.

function possoIrAoBanco(diaDaSemana, horaAtual){
    return diaDaSemana !== "Domingo" && diaDaSemana !== "Sábado" && horaAtual >= 9 && horaAtual <= 15;
}

console.log(possoIrAoBanco("segunda-feira", 10));
console.log(possoIrAoBanco("terça-feira", 18));
console.log(possoIrAoBanco("Sábado", 11));