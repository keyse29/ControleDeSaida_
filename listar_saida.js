let listar = document.getElementById('listar')
let res = document.getElementById('res')


listar.addEventListener('click', ()=>{


   fetch('http://localhost:8081/saida')
   .then(resp => resp.json())
   .then(dados => {
       console.log(dados)

       dados.forEach(dad => {
           res.innerHTML += `Data: ${dad.dataSolicitacao} <br>`
           res.innerHTML += `Saida:  ${dad.horaSaida} <br>`
           res.innerHTML += `Retorno:  ${dad.horaRetorno} <br>`
           res.innerHTML += `motivo:  ${dad.motivo} <br>`
           res.innerHTML += `destino:  ${dad.localDestino} <br>`
           res.innerHTML += `Status:  ${dad.status} <br>`
           res.innerHTML += `Aluno:  ${dad.nomeAluno} <br> `
           res.innerHTML += `Professor:  ${dad.nomeProfessor} <br>`
           res.innerHTML += `Id Saida: ${dad.codSaida} <br>`

   })
})
   .catch((err)=>{
   console.error('Erro ao listar!',err)
   })
})