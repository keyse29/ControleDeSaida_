let res = document.getElementById('res')
let aluno = document.getElementById('aluno')



aluno.addEventListener('click', (e) => {
 e.preventDefault();

 let nome = document.getElementById('nome').value
 let sobrenome = document.getElementById('sobrenome').value
 let matricula = document.getElementById('matricula').value
 let telefone = document.getElementById('telefone').value
 let email = document.getElementById('email').value

  let cadastroAluno = {
    nome: nome,
    sobrenome: sobrenome,
    matricula: matricula,
    telefone: telefone,
    email: email
  };

    res.innerHTML = '';
  
  fetch('http://localhost:8081/aluno', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cadastroAluno)
   })
   .then(resp =>{
    if (!resp.ok) {
        throw new Error("Erro ao cadastrar aluno.");
    }
    return resp.json();
  })
.then(cadastrarAluno => {
  res.innerHTML = `
  <p><strong>Aluno cadastrado com sucesso! </strong></p>
   <p><strong>Nome:</strong> ${nome} </p>
   <p><strong>Sobrenome:</strong> ${sobrenome} </p>
   <p><strong>Matricula:</strong> ${matricula} </p>
   <p><strong>Telefone:</strong> ${telefone} </p>
   <p><strong>Email:</strong> ${email} </p>
  `
})
.catch((err) => {
  console.error(err);
  res.innerHTML = `<p style="color: blue;"> Erro ao cadastrar o aluno.</p>`
})
})