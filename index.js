let pessoas = [];
let contador;

function salvar() {

    let pessoa = this.lerDados();
    console.log(pessoa);
    this.adicionar(pessoa);
    //alert("Pessoa adicionada")
}

function adicionar(pessoa){
    this.pessoas.push(pessoa);
    contador++;
    console.log(pessoas);
}

function lerDados() {
let pessoa = {};

pessoa.codigo = document.getElementById("codigo").value;
pessoa.nome = document.getElementById("nome").value;
pessoa.nascimento = document.getElementById("nascimento").value;
pessoa.sexo = document.getElementById("sexo").value;
pessoa.altura = document.getElementById("altura").value;
pessoa.peso = document.getElementById("peso").value;
pessoa.cpf = document.getElementById("cpf").value;
pessoa.especial = document.getElementById("especial").value;
pessoa.tipodepessoa = document.getElementById("tipodepessoa").value;

return pessoa;

}








