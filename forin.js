// For in é uma estrutura de repeticao usada para percorrer um array de indices aleatorios

var lista_pessoas = Array()

lista_pessoas['ze'] = 'Alex'
lista_pessoas[true] = 'Erica'
lista_pessoas[2] = 'Julia'
lista_pessoas['cachorro'] = 'Terezinha'
lista_pessoas['foco'] = 'Nildo'
lista_pessoas[5] = 'Italo'

for(var x in lista_pessoas){
    console.log('indice:' + x + ' ,' + ' valor:' + lista_pessoas[x])
}