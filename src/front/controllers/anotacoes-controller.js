class AnotacoesController {
    constructor(){
        this.arrayAnotacoes = []
    };
    addAnotacao(){
        let anotView = new AnotacoesView()
        let nota = new Anotacoes($('#titulo').val(), $('#descricaoTarefa').val())
        this.arrayAnotacoes.push(nota)
        anotView.renderizaAnotacao(nota)
        console.log(this.arrayAnotacoes)
    }
}

let anotacoesUser = new AnotacoesController()

$('#btn_action').click(function(event){
    event.preventDefault();
    anotacoesUser.addAnotacao()
    
})
