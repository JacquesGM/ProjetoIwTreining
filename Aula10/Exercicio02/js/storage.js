if($('#tabela-clientes')) {
	atualizarTabela();

}

function atualizarTabela(){

	$('#tabela-clientes').html('');

	buscarClientes().map((cadaCliente, id) => {
		$('#tabela-clientes').append( `
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
		`);
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

    let regiao = $('#regiao option:selected').text();
    let estado = $('#estado option:selected').text();
    let cidade = $('#cidade option:selected').text();

	let novoCliente = {
		regiao: regiao,
		estado: estado,
		cidade: cidade,
		nome: $('#nome').val(),
		cep: $('#cep').val(),
		logradouro: $('#logradouro').val(),
		numero: $('#numero').val(),
		bairro: $('#bairro').val(),
	};

	let clientes = buscarClientes();
	clientes.push(novoCliente);

	salvarClientes(clientes);
}

function excluirCliente(id){
	$('#id-excluir').val(id);
}

function confirmarExcluirCliente(){
	let clientes = buscarClientes();
	let id = $('#id-excluir').val();

	clientes.splice(id,1);

	salvarClientes(clientes);

	atualizarTabela();

	$('#fechar-modal').trigger('click');
}

$('#buscar').on('keyup',function() {
	let filtro = $(this).val().toLowerCase();

	$('#tabela-clientes tr').filter(function(){
		$(this).toggle(
			$(this).text().toLowerCase().indexOf(filtro) > -1
			);
	});
});