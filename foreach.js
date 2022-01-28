// a funcao nativa javascript .foreach so funciona para indices numericos

var lista_pessoas = Array()

lista_pessoas['nao vai aparecer'] = 'alex'
lista_pessoas[0] = 'mamai'
lista_pessoas[1] = 'terezinha'
lista_pessoas[2] = 'julia'
lista_pessoas[3] = 'tania'
lista_pessoas[4] = 'bob'

var f = function(valor, indice){
    console.log(valor, indice)
}

lista_pessoas.forEach(f)