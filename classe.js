class Pessoa {
    constructor (pessoa){
        this.nome   = pessoa.nome
        this.email  = pessoa.email
    }

    imprimeNome(){
        console.log(this)
    }

    
}

const arrayPessoa = {
    "nome" : "Lindomar",
    "email" : "indomar@lindo.com",

}

const novaPessoa = new Pessoa(arrayPessoa);
novaPessoa.imprimeNome();
