document.getElementById('cep').addEventListener('blur', () => {
    let cep = document.getElementById('cep').value;

    if (cep.length < 8) {
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(response => response.json())
        .then(response => {
            if (response.erro) {
                alert('CEP não encontrado');
                return;
            }

            document.getElementById('logradouro').value = response.logradouro;
            document.getElementById('bairro').value = response.bairro;
            document.getElementById('municipio').value = response.localidade;
            document.getElementById('uf').value = response.uf;

            document.getElementById('numero').focus();
        });
});