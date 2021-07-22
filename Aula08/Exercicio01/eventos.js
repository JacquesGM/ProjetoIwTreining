let passoAtual = 1;
let passos = [1,2,3];
let porcentagemPasso = parseInt(100/passos.length);

//document.getElementById('passo-legenda').innerHTML = '${passoAtual}/${passos.length}';
//document.getElementById('proximo').innerHTML = '${passoAtual}/${passos.length}';

atualizarProgresso();

function atualizarProgresso() {
	document.getElementById('mensagem-erro').classList.add('d-none');

	passos.map(numero => {
		document.getElementById(`passo-${numero}`).classList.add('d-none');
	});

	document.getElementById(`passo-${passoAtual}`).classList.remove('d-none');

	document.getElementById('progresso').innerHTML = (passoAtual*porcentagemPasso) + "%";
	document.getElementById('progresso').style.width = (passoAtual*porcentagemPasso) + "%";
	document.getElementById('passo-legenda').innerHTML = `${passoAtual}/${passos.length}`;
}

function mostrarErro(texto){
	document.getElementById('mensagem-erro').innerHTML = texto;
	document.getElementById('mensagem-erro').classList.remove('d-none');
}

function proximoPasso() {
	if (passoAtual === passos.length) {
		mostrarErro('Você já está no último passo');
		return;
	}	
	

	passoAtual += 1;
	
	atualizarProgresso();
}

function passoAnterior() {
	if (passoAtual === 1) {
		mostrarErro('Você já está no primeiro passo');
		return;
	}
	

	passoAtual -= 1;
	
	atualizarProgresso();
}


document.getElementById('proximo').addEventListener('click', () => {
	proximoPasso();
});

document.getElementById('anterior').addEventListener('click', () => {
	passoAnterior();
});