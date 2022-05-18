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

let teste1 = new Anotacoes("teste", "opa")
let teste2 = new Anotacoes(5, 'opa')