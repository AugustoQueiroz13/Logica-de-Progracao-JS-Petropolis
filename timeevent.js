/* EVENTOS DE TEMPO COM JAVASCRIPT

Os eventos de tempo permitem a execução do código em intevalos de tempo especificados. Esses intervalos de tempo são chamados de eventos de cronometragem.

Os dois métodos-chave para usar eventos de tempo em JavaScript são:

- SetTimeout (function, tempo em milisegundos)
--> Executa uma função, depois de esperar um tempo especificado em milissegundos.

- setInterval (function, miliseundos)
--> É o esmo que o SetTimeout(), mas repete a execução da funação continuamente.
*/

function ativarContagem(){
    document.getElementById('tempo').innerHTML = "Começou a contar!";
    setTimeout(function(){document.getElementById('tempo').innerHTML = "Contagem finalizada";}, 5000);
        
} 