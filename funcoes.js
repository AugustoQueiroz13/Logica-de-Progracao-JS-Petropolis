/* FUNÇÕES
- Uma função JavaScript é um bloco de código para executar uma tarefa específica.
- É como uma pequena "fábrica" onde você faz uma entrada e ela te dá uma saída.
- Pode ser denoniminado com um"mini-prorama" projetado para fazer uma tarefa que vai contribuir para todo o código.
- Uma função JS é executada quando é evocada (chamada).*/

//FUNÇÃO DE SOMA
function soma(valor1, valor2){
    return valor1 + valor2;
}

//FUNÇÃO COTAÇÃO DOLAR
function realParaDolar (real, cotacaoDolar){
    return real * cotacaoDolar
}
var valorReal = 7.89
var cotacao = 5.08
var total = realParaDolar(valorReal, cotacao);
//alert("O valor em real é R$: " + valorReal + "O valor em dólar U$ é: " + total);

//FUNÇAO ALERTA
function alertaHello(){
    alert("Olá Mundo");
}
//FUNÇÃO DE CONVERTER PARA GRAUS CELSIUS
function paraCelsius(valorFahrenheit){
    return (5/9) *(valorFahrenheit - 32);
}
var x = paraCelsius(77)
alert("A temperatura é de " +x+ " graus célsius");

