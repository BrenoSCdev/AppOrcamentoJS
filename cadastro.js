class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false
            }
        } return true
    }
}

class Bd {

    constructor(){
        let id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id', 0)
        }
    }

    getProximoId(){
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
        
    }

    gravar(d) {
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros(){
        let despesas = Array()

        let id = localStorage.getItem('id')
        for(let i = 1; i<= id; i++){
            let despesa = JSON.parse(localStorage.getItem(i))
            if(despesa === null){
                continue
            }
            despesa.id = i            
            despesas.push(despesa)
        }
        return despesas
    }

    pesquisar(despesa){
        let despesasFiltradas = Array()
        despesasFiltradas = this.recuperarTodosRegistros()
        if(despesa.ano != ''){
            despesasFiltradas  =  despesasFiltradas.filter(d => d.ano == despesa.ano)
        }
        if(despesa.mes != ''){
            despesasFiltradas  =  despesasFiltradas.filter(d => d.mes == despesa.mes)
        }
        if(despesa.dia != ''){
            despesasFiltradas  =  despesasFiltradas.filter(d => d.dia == despesa.dia)
        }
        if(despesa.tipo != ''){
            despesasFiltradas  =  despesasFiltradas.filter(d => d.tipo == despesa.tipo)
        }
        if(despesa.descricao != ''){
            despesasFiltradas  =  despesasFiltradas.filter(d => d.descricao == despesa.descricao)
        }
        if(despesa.valor != ''){
            despesasFiltradas  =  despesasFiltradas.filter(d => d.valor == despesa.valor)
        }
        return despesasFiltradas
    }

    remover(id){
        localStorage.removeItem(id)
    }
    
}

let bd = new Bd

const cadastrarDespesa = () => {
let ano = document.getElementById('ano')
let mes = document.getElementById('mes')
let dia = document.getElementById('dia')
let tipo = document.getElementById('tipo')
let descricao = document.getElementById('descricao')
let valor = document.getElementById('valor')

let despesa = new Despesa(
    ano.value, 
    mes.value, 
    dia.value, 
    tipo.value, 
    descricao.value, 
    valor.value )


    if(despesa.validarDados()){
        bd.gravar(despesa)
        $('#sucessoCampo').modal('show')
        ano.value=''
        mes.value=''
        dia.value=''
        tipo.value=''
        descricao=''
        valor=''
    } else {
        $('#erroCampo').modal('show')
    }
    
}

