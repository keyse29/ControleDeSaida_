let cadastrar = document.getElementById('cadastrar')
let res = document.getElementById('res')


let dataSolicitacao = document.getElementById('dataSolicitacao')
let horaSaida = document.getElementById('horaSaida')
let horaRetorno = document.getElementById('horaRetorno')
let motivo = document.getElementById('motivo')
let localDestino = document.getElementById('localDestino')
let status = document.getElementById('status')
let nomeAluno = document.getElementById('nomeAluno')
let nomeProfessor = document.getElementById('nomeProfessor')
let aluno_cod = document.getElementById('aluno_cod')
let professor_cod = document.getElementById('professor_cod')

cadastrar.addEventListener('click', (e) => {
    e.preventDefault()

    const valores = {
        dataSolicitacao: dataSolicitacao.value,
        horaSaida: horaSaida.value,
        horaRetorno: horaRetorno.value,
        motivo: motivo.value,
        localDestino: localDestino.value,
        status: status.value,
        nomeAluno: nomeAluno.value,
        nomeProfessor: nomeProfessor.value,
        aluno_cod: Number(aluno_cod.value),
        professor_cod: Number(professor_cod.value)
    }

    console.log(valores)


    res.innerHTML = ' '

    fetch(`http://localhost:8081/saida`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => {
        if (!resp.ok) {
            throw new Error("Erro no recebimento dos dados do banco de dados")
        } return resp.json()
    })
    .then(data => {
        console.log(data)
        res.innerHTML = `
            <strong></strong><br><br>
            Data de Solicitação: ${data.dataSolicitacao}<br>
            Hora da Saída: ${data.horaSaida}<br>
            Hora do Retorno: ${data.horaRetorno}<br>
            Motivo: ${data.motivo}<br>
            Destino: ${data.localDestino}<br>
            Status: ${data.status}<br>
            Nome do Aluno: ${data.nomeAluno}<br>
            Nome do Professor: ${data.nomeProfessor}<br>
            Código de identificação do Aluno: ${data.aluno_cod}<br>
            Código de identificação do Professor: ${data.professor_cod}<br>
        `;
    })
})