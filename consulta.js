const carregaListaDespesas = () => {

    let despesas = Array()

    despesas = bd.recuperarTodosRegistros()

    let listaDespesas = document.getElementById('listaDespesas')
    //percorrer o array despesas, listando cada despesa dinâmicamente
    despesas.forEach(function(d){
        let linha = listaDespesas.insertRow()
        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`
        switch (d.tipo){
            case '1': d.tipo = 'Alimentação'
                break
            case '2': d.tipo = 'Educação'
                break
            case '3': d.tipo = 'Lazer'
                break
            case '4': d.tipo = 'Saúde'
                break
            case '5': d.tipo = 'Transporte'
                break 
        }
        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor
        let btn = document.createElement("button")
        btn.className = 'btn-danger'
        btn.innerHTML = '<i class="fas fa-times"></i>'
        btn.id = d.id
        btn.onclick = function() {
            bd.remover(this.id)
            window.location.reload()
        }
        linha.insertCell(4).append(btn)
        console.log(d)
    })
}

const pesquisarDespesa = () =>{
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)
    let despesas = bd.pesquisar(despesa)

    let listaDespesas = document.getElementById('listaDespesas')
    listaDespesas.innerHTML = ''
    //percorrer o array despesas, listando cada despesa dinâmicamente
    despesas.forEach(function(d){
        let linha = listaDespesas.insertRow()
        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`
        switch (d.tipo){
            case '1': d.tipo = 'Alimentação'
                break
            case '2': d.tipo = 'Educação'
                break
            case '3': d.tipo = 'Lazer'
                break
            case '4': d.tipo = 'Saúde'
                break
            case '5': d.tipo = 'Transporte'
                break 
        }
        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor
        let btn = document.createElement("button")
        btn.className = 'btn-danger'
        btn.innerHTML = '<i class="fas fa-times"></i>'
        btn.id = d
        btn.onclick = function(){
            bd.remover(this.id)
            window.location.reload()
        }
        linha.insertCell(4).append(btn)
    })
}