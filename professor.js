let res = document.getElementById('res');
let btnCadastrar = document.getElementById('cadastrar_prof');

btnCadastrar.addEventListener('click', (e) => {
  e.preventDefault();

  let nome = document.getElementById('nome_prof').value
  let sobrenome = document.getElementById('sobrenome_prof').value
  let matricula = document.getElementById('matri_prof').value
  let telefone = document.getElementById('telefone_prof').value
  let email = document.getElementById('email_prof').value

  let cadastroProfessor = {
    nome,
    sobrenome,
    matricula,
    telefone,
    email
  };

  console.log('Dados enviados:', cadastroProfessor);

  res.innerHTML = '';

  fetch('http://localhost:8081/professor', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cadastroProfessor)
  })
  .then(resp => {
    if (!resp.ok) throw new Error('Erro ao cadastrar professor.');
    return resp.json();
  })
  .then(data => {
    res.innerHTML = `
      <p><strong>Professor cadastrado com sucesso!</strong></p>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Sobrenome:</strong> ${sobrenome}</p>
      <p><strong>Matrícula:</strong> ${matricula}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
      <p><strong>Email:</strong> ${email}</p>
    `;
  })
  .catch(err => {
    console.error(err);
    res.innerHTML = `<p style="color: red;">Erro ao cadastrar o professor.</p>`;
  });
});
