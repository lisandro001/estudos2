const falar = () => {
    return console.log('olaaa')
}
const andar = () => console.log('run...')
// falar()
// andar()

const pessoa = {
    nome: "Lisandro",
    idade :"23" ,
    profissao: "Programador",
    //metodos
    andar: () => console.log(`${pessoa.nome} começou a andar`),
    falar: () => {
        param : 'teste'
        console.log('Então, ')
        pessoa.falarFrase1()
        pessoa.falarFrase2()    
        console.log(this)    
    },
    falarFrase1 : () => {
        console.log("Eu falo a frase1")
    },
    falarFrase2: () => {
        console.log("Eu falo a frase2")
    }    
}

function pessoa2(){
    //console.log(this)
    func = function func (){
        console.log(this)
    }
    return func
}
pessoa2()

console.log(pessoa2)

const pessoas = function () {
    //console.log(this)
    passo = function (){
        console.log("oiiii")
    }
    return this.passo()
}

const exec = pessoas;
console.log(exec())
// pessoa.andar()
// pessoa.falar()