let pessoas = [];
let contador;

function salvar() {
    let pessoa = this.lerDados();
    console.log(pessoa);
    this.adicionar(pessoa);
}

function adicionar(pessoa) {
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

function adicionarPessoa() {
			var tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];
			var linha = tabela.insertRow();

			var celulaCodigo = linha.insertCell(0);
			var celulaNome = linha.insertCell(1);
			var celulaDataNasc = linha.insertCell(2);

			var codigo = document.getElementById("codigo").value;
			var nome = document.getElementById("nome").value;
			var dataNascimento = document.getElementById("idade").value;

			celulaCodigo.innerHTML = codigo;
			celulaNome.innerHTML = nome;
			celulaDataNasc.innerHTML = dataNascimento;

			document.getElementById("codigo").value = "";
			document.getElementById("nome").value = "";
			document.getElementById("dataNasc").value = "";

			atualizarContador();

			return false;
		}

		function atualizarContador() {
			var tabela = document.getElementById("tabela");
			var contador = document.getElementById("contador");

			var totalRegistros = tabela.rows.length - 1;

			if (totalRegistros === 1) {
				contador.innerHTML = "A tabela possui 1 registro.";
			} else {
				contador.innerHTML = "A tabela possui " + totalRegistros + " registros.";
			}
		}







