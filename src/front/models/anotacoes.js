class Anotacoes{
    constructor(titulo, notas){
        try{
            this.titulo = titulo;
            this.notas = notas;
            if(typeof this.titulo != 'string' || typeof this.notas != 'string'){
                throw new Error("Criação de notas - dados inválidos")
            }
        } catch(erro){
            window.alert(erro)
        }
    }
}
