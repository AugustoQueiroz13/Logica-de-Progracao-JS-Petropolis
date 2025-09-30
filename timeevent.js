/* EVENTOS DE TEMPO COM JAVASCRIPT

Os eventos de tempo permitem a execução do código em intevalos de tempo especificados. Esses intervalos de tempo são chamados de eventos de cronometragem.

Os dois métodos-chave para usar eventos de tempo em JavaScript são:

- SetTimeout (function, tempo em milisegundos)
--> Executa uma função, depois de esperar um tempo especificado em milissegundos.

- setInterval (function, miliseundos)
--> É o esmo que o SetTimeout(), mas repete a execução da funação continuamente.


function ativarContagem(){
    document.getElementById('tempo').innerHTML = "Começou a contar!";
//ativa a função uma vez quando der o tempo determinado
    setTimeout(function(){document.body.style.backgroundColor = "red";}, 5000);
} */

    tempo = setInterval(function() {
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById('tempo').innerHTML = soma;
    }, 1000);
function pararContagem() {
    clearInterval(tempo);
}