<script>
    function buscarCEP() {
    const cep = document.getElementById('cep_usu').value.replace(/\D/g, '');
        if (cep.length !== 8) {
                        document.getElementById('endereco').innerText = 'CEP inválido.';
                        return;
                    }
                    fetch(`https://viacep.com.br/ws/${cep}/json/`)
                        .then(response => response.json())
                        .then(data => {
                            if (data.erro) {
                                document.getElementById('endereco').innerText = 'CEP não encontrado.';
                            } else {
                                document.getElementById('endereco').innerText =
                                    `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
                            }
                        })
                        .catch(() => {
                            document.getElementById('endereco').innerText = 'Erro ao buscar CEP.';
                        });
                }
</script>