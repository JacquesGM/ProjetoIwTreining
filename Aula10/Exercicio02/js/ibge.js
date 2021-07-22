fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
    .then(response => response.json())
    .then(response => {
        response.map(regiao => {
            $('#regiao').append (`
                <option value="${regiao.id}">
                    ${regiao.nome}
                </option>
            `);
        });
    });

function showLoading() {
    $('#ibge-loading').show();
    $('#ibge-form').hide();
}

function hideLoading() {
    $('#ibge-loading').hide();
    $('#ibge-form').show();
}

$('#regiao').on('change', function() {
    let id = $(this).val();

    showLoading();

   $('#estado').html (` <option> -- Selecione --</option> `);

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${id}/estados`)
        .then(response => response.json())
        .then(response => {
            response.map(estado => {
               $('#estado').append (`
                   <option value="${estado.id}">
                       ${estado.nome}
                   </option>
               `);
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