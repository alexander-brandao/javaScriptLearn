// metodos matematicos 


// o metodo Math.ceil() recebe um numero quebrado e arredonda para +
// exemplo:
var x = Math.ceil(10.380)
document.write("Numero \n arredondado para cima: ",x, "<br>")

// o metodo Math.floor() recebe um numero quebrado e arredonda para -
var x = Math.floor(9.880)
document.write("Numero arredondado para baixo: ", x, "<br>")

// o metodo Math.round() recebe um numero quebrado e arredonda usando a seguinte regra matematica:
// se o numero quebrado for tiver numero decimal maior que 5, arredonda para cima, se for menor ou igual a 5, arredonda pra baixo
var x = Math.round(10.580)
document.write("Arredondamento tradiconal: ", x, "<br>")

// Metodo Math.random() fornece um numero quebrado aleatorio entre 0 e 1
//exemplo:

var x = Math.random()
document.write("Numero aleatorio entre 0 e 1: ",x)
