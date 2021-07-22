let passoAtual = 1;
let passos = [1, 2, 3];
let porcentagemPasso = (100/passos.length).toFixed(1); //parseInt(100/passos.length)

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

function mostrarErro(texto) {
  document.getElementById('mensagem-erro').innerHTML = texto;
  document.getElementById('mensagem-erro').classList.remove('d-none');
}

function proximoPasso() {
  if (passoAtual === passos.length) {
    //mostrarErro('Você já está no último passo');
      
    cadastrarCliente();
    alert('cliente cadastrado');
    location.href = "listar.html";

    return;
  }

  passoAtual += 1;

  if (passoAtual === passos.length) {
    let regiao = document.getElementById('regiao');
    regiao = regiao.options[regiao.selectedIndex].textContent;

    let estado = document.getElementById('estado');
    estado = estado.options[estado.selectedIndex].textContent; 

    let cidade = document.getElementById('cidade');
    cidade = cidade.options[cidade.selectedIndex].textContent;  

    document.getElementById('confirmar-passo-1').innerHTML = `
      <strong>Região: </stronmg>${regiao}<br>
      <strong>Estado: </stronmg>${estado}<br>
      <strong>Cidade: </stronmg>${cidade}<br>
      `

    document.getElementById('confirmar-passo-2').innerHTML = `
      <strong>CEP: </strong> ${document.getElementById('cep').value}<br>
      <strong>Logradouro: </strong> ${document.getElementById('logradouro').value}<br>
      <strong>Número: </strong> ${document.getElementById('numero').value}<br>
      <strong>Bairro: </strong> ${document.getElementById('bairro').value}<br>
      <strong>Municipio: </strong> ${document.getElementById('municipio').value}<br>
      <strong>UF: </strong> ${document.getElementById('uf').value}<br>
      `

    }
    
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
