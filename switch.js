/* Switch
É usado para realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação. Caso a condição não seja compátível não será executada e o valor padrão será acionado.
Switch (expressão) {
    case a:
        // o que vai acontecer
        break;
    case b:
        // o que vai acontecer case b
        break;
    case c:
        //o que vai acontecer
        break;
    default:
        // o que acontece
}
*/       

function verificaCor(){
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();
    switch (cor) {
        case "azul":
            // o que vai acontecer
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            // o que vai acontecer case b
            document.body.style.backgroundColor = "red";
            break;
        case "amarelo":
            //o que vai acontecer
            document.body.style.backgroundColor = "yellow";
            break;
        default:
            // o que acontece
            document.getElementById("teste").innerHTML = "Nenhuma cor disponível para esta cor: " + cor;
}
}