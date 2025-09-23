/* EVENTOS
Eventos são ações disparadas pela interação dos usuários na página.
É o uso correto desses eventos que tornam as páginas interativas e dinâmicas. 
Existem muitos eventos em JavaScript. 
Os mais utilizados são:

*onclick -> Dispara quando recebe um click.
*ondblclick -> Dispara quando recebe um clique duplo.
*onmouseover -> Disparado quando o mouse está sobre.
*onmouseout -> Dispara quando o mouse é movido do elemento.
*onmousemove -> Dispara quando o mouse é movido no elemento.
*onmousedown -> Dispara quando o click do botão foi pressionado.
*onmouseup -> Dispara quando o clique do botão é liberado.
*onfocus -> Dispara quando o elemento recebe o foco.
*onchange -> Dispara quando existe uma mudança de conteúdo
*onblur -> Disparado quando o elemento perde o foco.
*onkeydown -> Disparado quando uma tecla é pressionada.
*onkeypress -> Dispara quando uma tecla é pressionada e solta
*onkeyup -> Dispara quando uma tecla é solta sobre um elemento.
*onload -> Disparado quando a página terminou de ser carregada (body)
*onresize -> Disparado quando há um redimensionamento da janela.

*/

function eventoClick(){
    //alert('Acionamento do evento de click');
    document.body.style.backgroundColor = "yellow"
}
function eventoDblClick(){
    alert('Evento de double click')
}
function viraVer() {
    let div = document.getElementById("teste")
    div.style.backgroundColor = "red"
}
function viraAzul() {
    let div = document.getElementById("teste")
    div.style.backgroundColor = "blue"
}
function adicionaTexto(){
    let p = document.getElementById("teste");
    p.append('O mouse moveu');
}
function mudou(){
    console.log('Mudou o texto');
}
function teclaPressionada(){
    let input = document.getElementById("texto1").value;
    console.log(input);
}