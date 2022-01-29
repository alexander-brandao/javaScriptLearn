
var janela

function abrirPopUp(){
    janela = window.open("https://www.google.com", "nova_janela", "width=200,height=100")
}

function fecharPopUp(){
    janela.close()
}