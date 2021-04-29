const services =[
    {
        id: 'computeAnimate',
        title: 'Computadores',
        description: 'Compre os melhores computadores pelos melhores preços.',
        image: './imgMainService/computadores.jpg',
        link: './indexMain.html'
    },
    {
        id: 'notebookAnimate',
        title: 'Notebooks',
        description: 'Compre os melhores notebooks pelos melhores preços.',
        image: './imgMainService/not.jpg',
        link: './indexMain.html'
    }, 
    {
        id: 'celularAnimate',
        title: 'Celulares',
        description: 'Compre os melhores celulares pelos melhores preços.',
        image: './imgMainService/celular.jpg',
        link: './indexMain.html'
    }
]

export function MenuService(){
    for(const service of services){
        const main = document.querySelector('.services-main')
        const ViewService = createService(service);
        main.insertAdjacentHTML('beforeend', ViewService)
    }
    function createService(server){
        return `<div class="service">
                    <a href=${server.link} id="Service_${server.id}">
                        <div class="service-img" >
                            <img id=${server.id} src=${server.image}>
                        </div>
                    </a>
                    <h2>${server.title}</h2>
                    <p>${server.description}</p>
                   
                </div>`
    }
}
