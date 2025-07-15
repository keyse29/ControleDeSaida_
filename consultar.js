let consultar = document.getElementById('consultar')
let res = document.getElementById('res')


consultar.addEventListener('click', (e) => {


    
let id = document.getElementById('id').value
    fetch(`http://localhost:8081/aluno/${id}`)
     
    .then(response => {
        if (!response.ok) {
            throw new Error ('Aluno não encontrado.');
        }
        return response.json();
    })
.then(aluno => {
    res.innerHTML = ` 
    <h3>Dados do aluno</h3>
    <p><strong>Nome:<strong> ${aluno.nome}</p>
    <p><strong>Sobrenome:<strong> ${aluno.sobrenome}</p>
    <p><strong>Matricula:<strong> ${aluno.matricula}</p>
    <p><strong>Telefone:<strong> ${aluno.telefone}</p>
    <p><strong>Email:<strong> ${aluno.email}</p>
    <hr />`;
})
.catch(error => {
    alert(error);
    res.innerHTML = ' ';
})
})