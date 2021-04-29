export function createSlide(){
    return `<div class="container-slide">
                <div id="myCarousel" class="carousel slide mt-4">
            
                    <ul class="carousel-indicators">
                        <li class="item1 active"></li>
                        <li class="item2"></li>
                        <li class="item3"></li>
                    </ul>
            
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./img/2.jpg"  >
                        </div>
                        <div class="carousel-item">
                            <img src="./img/iPhone-XS-10.38.56.png" >
                        </div>
                        <div class="carousel-item">
                            <img src="./img/iMac-Flat-Mockup.jpeg"  >
                        </div>
                    </div>
            
                    <a class="carousel-control-prev" href="##">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="##">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>`
}