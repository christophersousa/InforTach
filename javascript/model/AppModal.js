const modal_login = [

            `<div class="modal-container" id="modal-login">
                <div class="modal">
                    <img src="./img/Logo.png" alt="logo" class="logoLogin">
                    <form action="">
                        <span class="close">x</span>
                        <div>
                            <input type="text" name="email" id='email' placeholder="E-mail" required>
                        </div>
                        <div>
                            <input type='password' id="senha" name='senha' placeholder="Senha" required>
                        </div>
                        <div class="complementos">
                            <p><a href="##">Esqueceu a senha?</a></p>
                        </div>
                        <div>
                            <input type="submit" name='entrar' id='entrar' value="Entrar">
                        </div>
                    </form>
                    <p  id="cadastro">Não possui cadastro? <a href= "##" class="loginCadastro" >Cadastre-se</a></p>
                </div>
            </div>`,

            `<div class="modal-container" id="modal-cadastro">
                <div class="modal">
                    <img src="./img/Logo.png" alt="logo-user" class="logoUser">
                    <form action="">
                        <span class="close">x</span>
                        <div>
                            <input type="text" name="email" id='emailCadastro' placeholder="E-mail" required>
                        </div>
                        <div>
                            <input type='password' id="senhaCadastro" name='senha' placeholder="Senha" required>
                            <input type="password" id="confime" name='confime' placeholder="Confirme a senha" required>
                        </div>
                        <div>
                            <input type="submit" name='entrar' id='enviar' value="Enviar">
                        </div>
                    </form>
                    <p  id="cadastro">Já possui cadastro? <a href="##" class="loginUser">Faça login.</a></p>
                </div>
            </div>`
]

export function MenuModal(){
    for (let i of modal_login){
        if(i !== '' || i!== 0){
            createModal(i)
        }
    }

    function createModal(modal) {
        const main = document.querySelector('.row')
        const ViewModal = modal;
        main.insertAdjacentHTML('beforeend', ViewModal)
    }
}