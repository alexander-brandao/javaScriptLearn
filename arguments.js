function soma(){
    var resultado = 0
    for(var i in arguments){
        resultado += arguments[i]
    }
     return resultado 
}

document.write(soma(12, 34, 53, ' essa é a soma dos parametros'))