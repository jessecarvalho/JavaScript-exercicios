/*
Escreva a função podeSeAposentar que recebe por parâmetro a idade, o sexo e os anos de contribuição previdenciária
que uma pessoa tem, exemplo:
Tenha em mente que a idade mínima para se aposentar para mulheres é 60 anos, enquanto que para homens é 65.
Em ambos os casos, você deve ter pelo menos 30 anos de contribuição.
*/

function podeSeAposentar(idade, sexo, anosContribuicao){
    if (sexo == "F"){
        if (idade >= 60){
            if (anosContribuicao >= 30){
                return true;
            }
        }
    }
    if (sexo == "M"){
        if (idade >= 65){
            if (anosContribuicao >= 30){
                return true;
            }
        }
    }
    return false;
}

console.log(podeSeAposentar(62, "F", 34))