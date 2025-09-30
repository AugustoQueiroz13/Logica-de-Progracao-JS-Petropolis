/* Laço de Repetição For
Loços de repetição oferecem um jeito fácil e rápido de executar uma ação repetidas vezes.


for (let i=0; i<10001; i++) {
    document.getElementById("teste").innerHTML += i  + ", "; 
}

var ano = new Date().getFullYear();
for(let i=ano; i>=1900; i--){
    document.getElementById("ano").innerHTML +="<option value='"+i+"'>"+i+"</option>";
}
    */
const carros = ["Gol", "Fusca", "Brasília", "Del Rey", "Fiat 147", "Chevette 87", "Escort"];


var tamanho = carros.length;

for(let i=0; i<tamanho; i++){
    document.getElementById('teste').innerHTML +=carros[i] + " - ";
}