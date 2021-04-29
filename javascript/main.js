import {MenuService} from './model/AppServico.js'
import {createMenu} from './model/AppMenu.js'
import {Modal} from './NewModal.js'
import {MenuModal} from './model/AppModal.js'

const home = document.querySelector('#InforTach')
home.addEventListener('load', a())

function a() {
     // criação do
     createMenu()

     // Criação do menu de serviço
     MenuService()
}
   
const computer = document.querySelector('#computer')
computer.addEventListener('click', (e)=>{
     e.preventDefault()
     productAccess('computer') 
})

const notebook = document.querySelector('#not')
notebook.addEventListener('click', (e)=>{
     e.preventDefault()
     productAccess('notebook') 
})

const celular = document.querySelector('#mobile')
celular.addEventListener('click', (e)=>{
     e.preventDefault()
     productAccess('cell')
})

const ServiceComputer = document.querySelector('#Service_computeAnimate')
ServiceComputer.addEventListener('click', (e)=>{
     e.preventDefault()
     productAccess('computer')
})

const ServiceNotebook = document.querySelector('#Service_notebookAnimate')
ServiceNotebook.addEventListener('click', (e)=>{
     e.preventDefault()
     productAccess('notebook')
})

const ServiceCell = document.querySelector('#Service_celularAnimate')
ServiceCell.addEventListener('click', (e)=>{
     e.preventDefault()
     productAccess('cell')
})

const cadastro = document.querySelector('.cadastro')
cadastro.addEventListener('click', function(){
    Modal('modal-login');
})


//função que gera o set do produto para o locaStore.
function productAccess(product){
     localStorage.setItem('Produto: ProdutoApp:', `${product}`)
     window.location.href = './indexMain.html'
}

MenuModal()