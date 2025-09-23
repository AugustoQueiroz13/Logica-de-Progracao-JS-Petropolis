/* OBJETOS
Objetos em JavaScript são basicamente variáveis com muitos valores dentro.
Ex: const carro = {marca:"ford", modelo:"ka", ano: 2015}
Os valores dentro de um objeto são chamados propriedades.
Objetos também podem ter métodos. Um método é uma função colocada dentro de uma propriedade.
*/
const carro = {
    marca: "ford", 
    modelo: "ka", 
    ano: 2015, 
    placa: "ABC1234",
    buzina:function () {alert('Biiiiiiiiiiiii')},
    completo: function(){
        return "A marca é: " +this.marca+" e o modelo é: " +this.modelo; 
    }
};
console.log(carro.completo());
carro.buzina();