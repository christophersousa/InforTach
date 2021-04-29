import {Modal} from './NewModal.js'
import {MenuModal} from './model/AppModal.js'
import storeProductor from './model/localStorage.js'

import Produtos from "./model/Produtos.js"

var fill = storeProductor

const main = document.querySelector('.ConteinerCard')
const Modalcard = document.querySelector('.card')
const p = localStorage.getItem('Produto: ProdutoApp:')

if(p=== 'computer'){
    fill.load(Produtos.computadores)
}else if(p=== 'notebook'){
    fill.load(Produtos.notebooks)
}else if (p==='cell'){
    fill.load(Produtos.celulares)
}


$(document).ready(function(e) {
   
    $('#notebook').click(function(e) {
        e.preventDefault()

        fill.load(Produtos.notebooks)
        localStorage.setItem('Produto: ProdutoApp:', 'notebook')
        MenuCard(fill)
        ModalCard(fill)
        
    })

    $('#computer').click(function(e) {
        e.preventDefault()

        fill.load(Produtos.computadores)
        localStorage.setItem('Produto: ProdutoApp:', 'computer')
        MenuCard(fill)
        ModalCard(fill)
    })

    $('#mobile').click(function(e) {
        e.preventDefault()

        fill.load(Produtos.celulares)
        localStorage.setItem('Produto: ProdutoApp:', 'cell')
        MenuCard(fill)
        ModalCard(fill)
    })

    $('.logar').click(function(e) {
        Modal('modal-login')
    })

})

//função de interação com os cards
function ModalCard(fill){
    $('.catalogo').on('click',function () {
        let id = $(this).attr('id')
        IdCard(id, fill)
        Modal(`card-${id}`)
    })
}

function MenuCard(fill){
    fill.readAll().forEach(createCard)
}


function createCard(card){
    const ViewCards = `<div class="catalogo" id=${card.id}>
                  <i class="fas fa-heart"></i>
                  <img src=${card.imagem} alt="">
                  <div class="valores">
                      <h6>${card.nome}</h6>
                      <span>por</span>
                      <p>R$ ${card.preco}</p>
                  </div>
                  <button type="submit" name="addcart" id="addcart">AddCart</button>
              </div>`

    if(card.id === '1'){
        main.innerHTML = ViewCards
    }else{
        main.insertAdjacentHTML('beforeend', ViewCards);
    }
}


// função que procura um card pelo id 
function IdCard(id, produtos){
    produtos.readAll().filter(produto =>{
        if(id === produto.id){
            const ViewModal = imprimir_note(produto)
            Modalcard.innerHTML = ViewModal
          }
    })
}

function imprimir_note(note){

    return `<main class="modal-produto" id="card-${note.id}">
            
              <div class="modelo">
                  <span class="close">x</span>
                  <div class="productorImg">
                      <img src=${note.imagem} alt="" class="modal-img">
                      <section class="fontes">
                          <p>Fonte: <a href="https://www.dell.com/pt-br?~ck=mn">Dell</a>&<a href=${note.fontLink}>${note.fonte}</a></p>
                      </section>
                  </div> 
                  <div class='description-produto'>             
                      <h2 id="title">${note.nome}</h2>
                      <ul>
                          <li>
                              <img class="Layer_1"src="./icons/processor-blk.svg" alt="">
                              ${note.processador}
                          </li>
                          <li>
                              <img class="Layer_1" src="./icons/laptop-blk.svg" alt="">
                              ${note.so}
                          </li>
                          <li>
                              <img class="Layer_1"src="./icons/videocard-blk.svg" alt="">
                              ${note.placaVideo}
                          </li>
                          <li>
                              <img class="Layer_1"src="./icons/memory-blk.svg" alt="">
                              ${note.mem_ram}
                          </li>
                          <li>
                              <img class="Layer_1"src="./icons/harddrive-blk.svg" alt="">
                              ${note.hd_ssd}
                          </li>
                      </ul>
                      <section id="precoProducto">
                          <span><b>Preço</b></span>
                          <span id="preco">R$${note.preco}</span>
                      </section>
                      <div id="button">
                          <button type="submit" id='Comprar'>AddCart</button>
                      </div>
                  </div>
                </div>
              </div>
          </main>`;
          
};

//Form de pesquisar

const pesquisaFrom = document.querySelector('#pesquisa');
pesquisaFrom.addEventListener('click', function(){
    console.log('ola')
    loadForm()
})

function loadForm(){
    const researchForm = document.querySelector('#research')
    researchForm.addEventListener('submit', function(e){
        e.preventDefault();
        const pesquisa = document.querySelector('#pesquisa')
        console.log(pesquisa.value.toUpperCase())
        research(pesquisa.value.toUpperCase(), fill)
        e.defaultPrevented()
    })
}



function research(value, fill){
    console.log(value)
    console.log(fill.readAll())
    let array =[]
    fill.readAll().filter(produto =>{
        const nome = produto.nome
        const marca = produto.marca
        const processador = produto.processador
        
        if(value === nome.toUpperCase() || value === processador.toUpperCase() ){
            array.push(produto)
        }
    })
    array[0].id = '1'
    fill.load(array)
    array = []
    MenuCard(fill)
    ModalCard(fill)
}

//Chamda da função que cria o modal
MenuModal()
//chamada da função que cria os cards ao logar no documento html
MenuCard(fill)
//chamada da função que cria o modal para os cards dos produtos
ModalCard(fill)

