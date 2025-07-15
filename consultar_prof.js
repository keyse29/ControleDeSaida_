let consultar = document.getElementById('consultar')
let res = document.getElementById('res')


consultar.addEventListener('click', () => {


    
let id = document.getElementById('id').value
    fetch(`http://localhost:8081/professor/${id}`)
     
    .then(response => {
        if (!response.ok) {
            throw new Error ('Professor não encontrado.');
        }
        return response.json();
    })
.then(professpr => {
    res.innerHTML = ` 
    <h3>Dados do professor</h3>
    <p><strong>Nome:<strong> ${professpr.nome}</p>
    <p><strong>Sobrenome:<strong> ${professpr.sobrenome}</p>
    <p><strong>Matricula:<strong> ${professpr.matricula}</p>
    <p><strong>Telefone:<strong> ${professpr.telefone}</p>
    <p><strong>Email:<strong> ${professpr.email}</p>
    <hr />`;
})
.catch(error => {
    alert(error);
    res.innerHTML = ' ';
})
})