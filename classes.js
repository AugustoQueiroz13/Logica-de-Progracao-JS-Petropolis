/* CLASSES EM JAVASCRIPT
Em 2015 foi introduzido no JavaScrip as Classes.
As classes são um conceito antigo em programação e várias linguagens utilizam elas. No JavaScrip é relativamente novo, por isso os programadores experientes não sabem utilizar as classes muito bem.

Basicamente, as classes são como "fábricas" para criar objetos. Pode se dizer que são "Funções especiais" para criação de objetos.

Assim como uma fábrica da vida real precisa de maquinas para construir os objetos, as Classes no JavaScript usam um método chamado contructor() para fabricar seus objetos.

 */

class Carro {
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.modelo + " Buzinou: Biiiiiii";
    }
}
const C300 = new Carro("Crisler", "C300", 2006);
const chevette = new Carro("Chevrolet", "Chevetão", 1987);
console.log(chevette.buzina());
console.log(C300.buzina());
chevette.ano = 1992
console.log(chevette);
