//function criarPessoa() {}

/* let pessoa =  {
    codigo :"001",
    nome : "Maria",
    nascimento : "12/08/2000",
    sexo : "feminino",
    altura : 12,
    peso : 83,
    cpf : "00000000000",
    especial : "nao",
    tipodepessoa : "fisica",
    } 
    
    document.getElementById("botao-cadastro").addEventListener("click", function() {
    let form = document.getElementById("form");
    console.log("captou o click !");
    let pessoa =  {
    codigo : form.codigo.value,
    nome : form.nome.value,
    nascimento : form.nascimento.value,
    sexo : form.sexo.value,
    altura : form.altura.value,
    peso : form.peso.value,
    cpf : form.cpf.value,
    especial : form.especial.value,
    tipodepessoa : form.tipodepessoa.value,
    }
    console.log(pessoa,"objeto")
    pessoas.push(JSON.stringify(pessoa));
    console.log(pessoas);
  });
*/
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








