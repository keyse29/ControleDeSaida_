let apagar = document.getElementById('apagar')
let res = document.getElementById('res')

apagar.addEventListener('click', () => {
    let id = Number(document.getElementById('id').value)

    res.innerHTML = ' '

    fetch(`http://localhost:8081/aluno/${id}`, {
        method: `DELETE`
    })
    .then(resp => {
        console.log(resp)
        console.log(resp.status)
        if(resp.status == 204){
            res.innerHTML += `Dados Deletados! <br> `
        }else{
            res.innerHTML += `Os dados não foi deletados`
        }
    })
    .catch((err) => {
        console.error('Erro ao pagar os dados!',err)
    })
})
