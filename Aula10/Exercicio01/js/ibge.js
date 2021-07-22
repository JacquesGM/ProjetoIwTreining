fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
    .then(response => response.json())
    .then(response => {
        response.map(regiao => {
            document.getElementById('regiao').innerHTML += `
                <option value="${regiao.id}">
                    ${regiao.nome}
                </option>
            `;
        });
    });

function showLoading() {
    document.getElementById('ibge-loading').classList.remove('d-none');
    document.getElementById('ibge-form').classList.add('d-none');
}

function hideLoading() {
    document.getElementById('ibge-loading').classList.add('d-none');
    document.getElementById('ibge-form').classList.remove('d-none');
}

document.getElementById('regiao').addEventListener('change', () => {
    let id = document.getElementById('regiao').value;

    showLoading();

    document.getElementById('estado').innerHTML = `
        <option> -- Selecione --</option>
    `;

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${id}/estados`)
        .then(response => response.json())
        .then(response => {
            response.map(estado => {
               document.getElementById('estado').innerHTML += `
                   <option value="${estado.id}">
                       ${estado.nome}
                   </option>
               `;
            });

            hideLoading();
        });
});


document.getElementById('estado').addEventListener('change', () => {
    let id = document.getElementById('estado').value;

    showLoading();

    document.getElementById('cidade').innerHTML = `
        <option> -- Selecione --</option>
    `;

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`)
        .then(response => response.json())
        .then(response => {
            response.map(cidade => {
                document.getElementById('cidade').innerHTML += `
                   <option value="${cidade.id}">
                       ${cidade.nome}
                   </option>
               `;
            });

            hideLoading();
        });
});