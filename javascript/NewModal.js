/*Animação do Modal de cadastro*/
export function Modal(modalID){
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar')

    modal.addEventListener('click', function(e){
        if(e.target.id == modalID || e.target.className == 'close'){
            modal.classList.remove('mostrar')
        }else if(e.target.className === 'loginCadastro'){
            Modal('modal-cadastro')
            modal.classList.remove('mostrar')
        }else if(e.target.className === 'loginUser'){
            Modal('modal-login')
            modal.classList.remove('mostrar')
        }
    })
}




