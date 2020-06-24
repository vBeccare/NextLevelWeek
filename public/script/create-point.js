
function populatesUFs(){
    const ufselect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res)=> {return res.json()})
    .then( states => {

        for(const state of states) {
            ufselect.innerHTML += `<option value ="${state.id}">${state.sigla}</option>`
        }
    } )
}

populatesUFs()


function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const indexofselectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexofselectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${event.target.value}/municipios`
   
    citySelect.innerHTML = "<option value>Selecione a cidade </option> "
    citySelect.disabled = true
   
    fetch(url)
    .then((res)=> {return res.json()})
    .then( cities => {
        
        for(const city of cities) {
            citySelect.innerHTML += `<option value ="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    } )
}


document
.querySelector("select[name=uf]")
.addEventListener("change", getCities)


//itens de coleta

const itenscoleta = document.querySelectorAll (".itens-grid li")

for (const item of itenscoleta){
    item.addEventListener("click", handleSelectedItem)
}


 //atualizar campo escondido com os itens selecionados
const itenscoletados = document.querySelector("input[name=items]")


let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target

    //adicionar ou remover uma classe com js
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    //verificar se existem itens selecionados, se sim
    //pegar os itens selecionados

    const jaselecionado = selectedItems.findIndex( item => {
        const itemFound = item == itemId
        return itemFound
    } )

    //se ja estiver selecionado tirar da seleção
    if(jaselecionado >= 0 ) {
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId
        })

        selectedItems = filteredItems
    } else {
        //senao tiver selecionado, adicionar à seleção

        selectedItems.push(itemId)
    }

    itenscoletados.value =selectedItems

}

