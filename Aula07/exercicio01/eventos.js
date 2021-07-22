let passoAtual = 1;

function atualizarProgresso() {
	document.getElementById('passo-1').classList.add('d-none');
	document.getElementById('passo-2').classList.add('d-none');
	document.getElementById('passo-3').classList.add('d-none');

	document.getElementById(`passo-${passoAtual}`).classList.remove('d-none');

	document.getElementById('progresso').innerHTML = (passoAtual*33) + "%";
	document.getElementById('progresso').style.width = (passoAtual*33) + "%";
	document.getElementById('passo-legenda').innerHTML = passoAtual;
}

function proximoPasso() {
	if (passoAtual === 3) {
		return;
	}	
	

	passoAtual += 1;
	
	atualizarProgresso();
}

function passoAnterior() {
	if (passoAtual === 1) {
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