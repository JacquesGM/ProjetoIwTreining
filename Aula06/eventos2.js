document.getElementById('formulario').addEventListener('submit', function () {
	
	event.preventDefault();

	let nome = document.getElementById('nome').value;
	let email = document.getElementById('email').value;
	let telefone = document.getElementById('telefone') .value;

	if (validarForm(nome, email, telefone) === false){
		return;
	};

	document.getElementById('tabela').innerHTML += `
		<tr>
			<td>${nome}</td>
			<td>${email}</td>
			<td>${telefone}</td>
		</tr>
	`;

	document.getElementById('formulario').reset();
});

function validarForm(nome, email, telefone) {

	let resultado = true;

	if (nome.length < 10){
		document.getElementById('nome').classList.add('is-invalid');
		document.getElementById('nome-erro').classList.remove('d-none');

		resultado = false;
	}
	if (email.length < 4){
		document.getElementById('email').classList.add('is-invalid');
		document.getElementById('email-erro').classList.remove('d-none');

		resultado = false;
	}
	if (telefone.length < 9){
		document.getElementById('telefone').classList.add('is-invalid');
		document.getElementById('telefone-erro').classList.remove('d-none');

		resultado = false;
	}

	return resultado;
}

document.getElementById('nome').addEventListener('keydown', function () {
  document.getElementById('nome').classList.remove('is-invalid');
  document.getElementById('nome-erro').classList.add('d-none');
});

document.getElementById('email').addEventListener('keydown', function () {
  document.getElementById('email').classList.remove('is-invalid');
  document.getElementById('email-erro').classList.add('d-none');
});

document.getElementById('telefone').addEventListener('keydown', function () {
  document.getElementById('telefone').classList.remove('is-invalid');
  document.getElementById('telefone-erro').classList.add('d-none');
});