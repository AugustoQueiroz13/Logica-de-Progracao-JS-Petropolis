/* ARRAYS (MATRIZES)
Os arrays em JavaScrips são usados para armazenar vários valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para que os itens dentro dele, os arrays não possuem propriedades. o item dentro dele é encontrado pela posição.

Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: 
-> Forma 1:
const lista = ["arroz", "feijão", "macarrão", "leite"]
-> Forma 2:
const lista = [
    "arroz",    [0]
    "feijão",   [1]
    "macarrão", [2]
    "leite",    [3]
]
-> Forma 3:
const lista = new Array("arroz", "feijão", "macarrão", "leite");
-> Forma 4:
const lista =[];
lista[0] = "arroz";
lista[1] = "feijão";
lista[2] = "macarrão";
lista[3] = "leite";

A lista[0] (lista na posição 0) vai contar o valor "arroz"
A lista[1] (lista na posição 1) vai conter o valor "feijão"

...e assim por diante.

const lista = ["arroz", "feijão", "macarrão", "leite"];
lista[0] = "café";

console.log(lista);

*/

// Array e Objeto
//const pessoa1 = {nome: "João", sobrenome:"Oliveira", idade:25}; // --> objeto



//alert(pessoa.length) = conta quantos itens tem na matriz
//alert(pessoa[pessoa.length - 1]); = buscar ultima posição da matriz
//pessoa[8] = "computador"; = iserir valor em posição específica da matriz
//pessoa.push("Front End") = inserir um valor na ultima posição da matriz
//pessoa.pop() = remover um valor na ultima posição da matriz
//alert(Array.isArray(pessoa1)); = verificar se é uma matriz ou não

const pessoa = ["João", "Oliveira", 25, "Programador"]; // --> array
const pessoa2 =["Maria", "Silva", 23, "UX Design"]
const jogadores = ["Chuck Norris", "Biro Biro", "Neymar", "Pelé", "Maradona"]
const numeros = [40, 100, 1, 5, 25, 10];
// MÉTODOS PARA ARRAYS
//pessoa.shift(); = remove a primeira posição da matriz
//pessoa.unshift("Cidadão"); = insere um valor na primeira posição da matriz
//delete pessoa[1]; = remove o valor da lista mas não remove a posiçao
//pessoa.splice(2, 1, "Petropolitano", "Fluminense") = insere um novo valor na matriz em posição determinada
//numeros.sort(function(a,b){return a-b}); = colocar matriz numérica em ordem crescente
//const jogOrdem = jogadores.sort(); = colocar a matriz em ordem alfabética
//const jogOrdem = jogadores.reverse(); = ordem invertida
//const craques = jogadores.slice(3); = fatiar a exibição dos valores da matriz
//const geral = pessoa.concat(pessoa2); = juntar duas listas em uma única
//document.getElementById("teste").innerHTML = numeros.join(" | "); = insere um separador entre os itens da matriz



