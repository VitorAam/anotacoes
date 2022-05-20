class AnotacoesView{
    renderizaAnotacao(anotacao){
        $('#notes').html(`${$('#notes').html()}<div><h6>${anotacao.titulo}</h6><p>${anotacao.notas}</p></div>`)
    }
}