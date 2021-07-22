if(document.getElementById('tabela-clientes')) {
	atualizarTabela();

}

function atualizarTabela(){

	document.getElementById('tabela-clientes').innerHTML ='';

	buscarClientes().map((cadaCliente, id) => {
		document.getElementById('tabela-clientes').innerHTML += `
			<tr>
				<td>${cadaCliente.nome}</td>
				<td>${cadaCliente.regiao}</td>
				<td>${cadaCliente.estado}</td>
				<td>${cadaCliente.cidade}</td>
				<td>${cadaCliente.logradouro}</td>
				<td>${cadaCliente.bairro}</td>
				<td>${cadaCliente.cep}</td>
				<td>
					<button class="btn tbn-sm btn-warning">Editar</button>
					<button onclick="excluirCliente(${id})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn tbn-sm btn-danger">Excluir</button>
				</td>
			</tr>
		`;
	});
}

function buscarClientes(){
	return JSON.parse(
		localStorage.getItem('clientes') || '[]'
	);	
}

function salvarClientes(clientes){
	localStorage.setItem('clientes', JSON.stringify(clientes));
}

function cadastrarCliente(){
	let regiao = document.getElementById('regiao');
    regiao = regiao.options[regiao.selectedIndex].textContent;

    let estado = document.getElementById('estado');
    estado = estado.options[estado.selectedIndex].textContent; 

    let cidade = document.getElementById('cidade');
    cidade = cidade.options[cidade.selectedIndex].textContent;

	let novoCliente = {
		regiao: regiao,
		estado: estado,
		cidade: cidade,
		nome: document.getElementById('nome').value,
		cep: document.getElementById('cep').value,
		logradouro: document.getElementById('logradouro').value,
		numero: document.getElementById('numero').value,
		bairro: document.getElementById('bairro').value,
	};

	let clientes = buscarClientes();
	clientes.push(novoCliente);

	salvarClientes(clientes);
}

function excluirCliente(id){
	document.getElementById('id-excluir').value = id;
}

function confirmarExcluirCliente(){
	let clientes = buscarClientes();
	let id = document.getElementById('id-excluir').value;

	clientes.splice(id,1);

	salvarClientes(clientes);

	atualizarTabela();

	document.getElementById('fechar-modal').dispatchEvent(
		new Event('click')
	);
}

function filtrarTabela(){
	let table = document.getElementById('tabela-clientes');
	let filtro = document.getElementById('buscar').value.toLowerCase();
	let linhas = table.getElementsByTagName('tr');
	let coluna;

	for(let i = 0; i < linhas.length; i++){
		coluna = linhas[i].getElementsByTagName('td')[0];

		if(coluna.innerText.toLowerCase().indexOf(filtro) > -1){
			linhas[i].style.display = '';
			continue;
		}

		linhas[i].style.display = 'none';
	}
}

if (document.getElementById('buscar')) {
	document.getElementById('buscar').addEventListener('keyup', () =>{
		filtrarTabela();
	});
}