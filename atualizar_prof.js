let atualizar = document.getElementById('atualizar');
let buscar = document.getElementById('buscar');
let res = document.getElementById('res');

buscar.addEventListener('click', (e) => {
    e.preventDefault();
    let id = Number(document.getElementById('id').value);
    res.innerHTML = '';

    fetch(`http://localhost:8081/professor/${id}`)
        .then(resp => {
            if (!resp.ok) throw new Error(`Erro ao buscar professor (status ${resp.status})`);
            return resp.json();
        })
        .then(dado => {
            document.getElementById('nome').value = dado.nome || '';
            document.getElementById('sobrenome').value = dado.sobrenome || '';
            document.getElementById('matricula').value = dado.matricula || '';
            document.getElementById('telefone').value = dado.telefone || '';
            document.getElementById('email').value = dado.email || '';
            res.innerHTML = '';
        })
        .catch(err => {
            console.error('Erro ao buscar professor:', err);
            res.innerHTML = '❌ Professor não encontrado. Verifique o ID.';
        });
});

atualizar.addEventListener('click', (e) => {
    e.preventDefault();

    let id = Number(document.getElementById('id').value);
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let matricula = document.getElementById('matricula').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;

    const valores = {
        nome: nome,
        sobrenome: sobrenome,
        matricula: matricula,
        telefone: telefone,
        email: email
    };

    res.innerHTML = '';

    fetch(`http://localhost:8081/professor/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(valores)
    })
    .then(resp => {
        if (resp.ok) {
            res.innerHTML = '✅ Dados atualizados com sucesso!';
        } else if (resp.status === 500) {
            res.innerHTML = '❌ Erro interno no servidor. Tente novamente mais tarde.';
        } else {
            res.innerHTML = `❌ Erro ao atualizar. Código: ${resp.status}`;
        }
    })
    .catch(err => {
        console.error('Erro ao atualizar o professor:', err);
        res.innerHTML = '❌ Falha na comunicação com o servidor.';
    });
});
