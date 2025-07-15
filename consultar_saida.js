let consultar = document.getElementById('consultar')
let res = document.getElementById('res')


consultar.addEventListener('click', (e) => {


    
let id = document.getElementById('id').value
    fetch(`http://localhost:8081/saida/${id}`)
     
    .then(response => {
        if (!response.ok) {
            throw new Error ('saida não encontrada.');
        }
        return response.json();
    })
.then(saida => {
    res.innerHTML = ` 
    <h3>Dados de saida</h3>
    <p><strong>Data:<strong> ${saida.dataSolicitacao}</p>
    <p><strong>Saida:<strong> ${saida.horaSaida}</p>
    <p><strong>Retorno:<strong> ${saida.horaRetorno}</p>
    <p><strong>Motivo:<strong> ${saida.motivo}</p>
    <p><strong>Destino:<strong> ${saida.localDestino}</p>
    <p><strong>Status:<strong> ${saida.status}</p>
    <p><strong>Aluno:<strong> ${saida.nomeAluno}</p>
    <p><strong>Professor:<strong> ${saida.nomeProfessor}</p>
    <p><strong>Id saida:<strong> ${saida.codSaida}</p>
    <hr />`;
})
.catch(error => {
    alert(error);
    res.innerHTML = ' ';
})
})