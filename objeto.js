// criação de um objeto
const objeto = {
    parametro: "",    
    andar: function (){
        console.log ("eu ando");
    }, //antes do ecma, decraração de função
    falar(){ 
        console.log ("eu estou falando agora");
    } //Depois do Ecma
}

objeto.falar();