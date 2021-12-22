const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
 
 
const row = $('.container.active .row--img') 
// image in search
if (row){
    const search = {
        imags: [
            {
                name: 'Milly' ,
                path: './asset/img/1.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/2.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/3.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/4.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/5.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/6.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/7.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/8.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/9.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/10.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/11.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/12.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/13.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/14.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/15.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/16.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/19.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/20.jpg'
            },

            {
                name: 'Milly' ,
                path: './asset/img/21.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/22.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/23.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/24.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/25.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/26.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/27.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/28.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/29.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/30.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/31.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/32.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/33.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/34.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/35.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/36.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/37.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/38.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/39.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/40.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/41.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/42.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/43.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/44.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/45.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/46.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/47.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/48.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/49.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/50.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/51.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/52.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/53.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/54.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/55.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/56.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/57.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/58.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/59.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/60.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/61.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/62.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/63.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/64.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/65.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/66.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/67.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/68.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/69.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/70.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/71.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/72.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/73.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/74.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/75.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/76.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/77.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/78.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/79.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/80.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/81.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/82.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/83.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/84.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/85.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/86.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/87.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/88.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/89.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/90.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/91.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/92.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/93.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/94.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/95.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/96.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/97.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/98.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/99.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/100.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/101.jpg'
            },
            {
                name: 'Milly' ,
                path: './asset/img/102.jpg'
            }
        ],
        render: function(){
            const html = this.imags.map((img, index) => {
                return `
                <div class="container-part col l-4 m-4 c-4">
                    <div class="container-part--cover">
                        <img src="${img.path}" alt="girl xinh" class="container-image">
                        <div class="image--hover hide-on-table hide-on-phone">
                            <ul class="interact hide-on-table hide-on-phone">
                                <li><i class="interact-heart fas fa-heart"></i><span>142</span></li>
                                <li><i class="interact-comment fas fa-comment"></i><span>10</span></li>
                            </ul>
                        </div> 
                    </div>
                </div>`
            })
            row.innerHTML = html.join('')
        },
        handleEvent: function(){
            // truong hop lay image
            let images = $$('.container .container-image') ; // console.log(images) => kiem tra coi lay dc chua 
            images.forEach(image => image.addEventListener('click', function(e){
                let temp = `<div class="cover">
                                <i class="fas fa-chevron-circle-left image-pre"></i>  
                                <img src="${e.target.getAttribute('src')}" alt="girl xinh" class="image">
                                <i class="fas fa-chevron-circle-right image-next"></i> 
                            </div>` 
                document.body.insertAdjacentHTML('beforeend', temp)
            })) 
            
            // truong hop lay image + coment + like
            // khong biet xai de quy de toi uux
            let imageHovers = $$('.image--hover') ;
            imageHovers.forEach(imageHover => imageHover.addEventListener('click', function(e) {
                let temp ;
                if (e.target.matches('.image--hover')){
                    temp = `<div class="cover">
                    <i class="fas fa-chevron-circle-left image-pre"></i>
                    <div class="user-picture">
                        <div class="image-wrap">
                            <img src="${e.target.parentNode.firstElementChild.getAttribute('src')}" alt="girl xinh" class= "image">
                        </div>
                        <div class="user-comment">
                            <header>
                                <img src="./asset/img/1.jpg" alt="avatar-user-girl-xinh" class="user-header-img">
                                <div class="user-header-info">
                                    <a>hotgirlasians</a>
                                    <span>. Following</span>
                                    <p>Asian</p>
                                </div>
                                <span class="etc"><i class="fas fa-ellipsis-h"></i></span>
                            </header>
                            <div class="user-comment-container">
                                
                            </div>
                            <footer>
                                <div class="user-comments">
                                    <div class="user-comment-reaction">
                                        <span>
                                            <i class="far fa-heart icon-heart--unlike active"></i>
                                            <i class="fas fa-heart icon-heart--like"></i>
                                        </span>
                                        <span><i class="icon-comment far fa-comment"></i></span>
                                        <span><i class="icon-plane far fa-paper-plane"></i></span>
                                    </div>
                                    <span>
                                        <i class="icon-bookmark--none active far fa-bookmark"></i>
                                        <i class="icon-bookmark--save fas fa-bookmark"></i>
                                    </span>
                                </div>
                                <div class="user-comments">
                                    <div class="icon-smile"><i class="far fa-smile"></i></div>
                                    <input type="text" placeholder="Add your comment...">
                                    <div class="post">POST</div>
                                </div>
                            </footer>
                        </div>
                    </div>
                    <i class="fas fa-chevron-circle-right image-next"></i>
                </div>` 
                } 
                else if (e.target.matches('.interact')){
                    temp = `<div class="cover">
                    <i class="fas fa-chevron-circle-left image-pre"></i>
                    <div class="user-picture">
                        <div class="image-wrap">
                            <img src="${e.target.parentNode.parentNode.firstElementChild.getAttribute('src')}" alt="girl xinh" class="image">
                        </div>
                        <div class="user-comment">
                            <header>
                                <img src="./asset/img/1.jpg" alt="avatar-user-girl-xinh" class="user-header-img">
                                <div class="user-header-info">
                                    <a>hotgirlasians</a>
                                    <span>. Following</span>
                                    <p>Asian</p>
                                </div>
                                <span class="etc"><i class="fas fa-ellipsis-h"></i></span>
                            </header>
                            <div class="user-comment-container">
                                
                            </div>
                            <footer>
                                <div class="user-comments">
                                    <div class="user-comment-reaction">
                                        <span>
                                            <i class="far fa-heart icon-heart--unlike active"></i>
                                            <i class="fas fa-heart icon-heart--like"></i>
                                        </span>
                                        <span><i class="icon-comment far fa-comment"></i></span>
                                        <span><i class="icon-plane far fa-paper-plane"></i></span>
                                    </div>
                                    <span>
                                        <i class="icon-bookmark--none active far fa-bookmark"></i>
                                        <i class="icon-bookmark--save fas fa-bookmark"></i>
                                    </span>
                                </div>
                                <div class="user-comments">
                                    <div class="icon-smile"><i class="far fa-smile"></i></div>
                                    <input type="text" placeholder="Add your comment...">
                                    <div class="post">POST</div>
                                </div>
                            </footer>
                        </div>
                    </div>
                    <i class="fas fa-chevron-circle-right image-next"></i>
                </div>` 
                    
                }
                else {
                    temp = `<div class="cover">
                    <i class="fas fa-chevron-circle-left image-pre"></i>
                    <div class="user-picture">
                        <div class="image-wrap">
                            <img src="${e.target.parentNode.parentNode.parentNode.parentNode.firstElementChild.getAttribute('src')}" alt="girl xinh" class="image">
                        </div>
                        <div class="user-comment">
                            <header>
                                <img src="./asset/img/1.jpg" alt="avatar-user-girl-xinh" class="user-header-img">
                                <div class="user-header-info">
                                    <a>hotgirlasians</a>
                                    <span>. Following</span>
                                    <p>Asian</p>
                                </div>
                                <span class="etc"><i class="fas fa-ellipsis-h"></i></span>
                            </header>
                            <div class="user-comment-container">
                                
                            </div>
                            <footer>
                                <div class="user-comments">
                                    <div class="user-comment-reaction">
                                        <span>
                                            <i class="far fa-heart icon-heart--unlike active"></i>
                                            <i class="fas fa-heart icon-heart--like"></i>
                                        </span>
                                        <span><i class="icon-comment far fa-comment"></i></span>
                                        <span><i class="icon-plane far fa-paper-plane"></i></span>
                                    </div>
                                    <span>
                                        <i class="icon-bookmark--none active far fa-bookmark"></i>
                                        <i class="icon-bookmark--save fas fa-bookmark"></i>
                                    </span>
                                </div>
                                <div class="user-comments">
                                    <div class="icon-smile"><i class="far fa-smile"></i></div>
                                    <input type="text" placeholder="Add your comment...">
                                    <div class="post">POST</div>
                                </div>
                            </footer>
                        </div>
                    </div>
                    <i class="fas fa-chevron-circle-right image-next"></i>
                </div>` 
                }
                
                document.body.insertAdjacentHTML('beforeend', temp)
    
                const iconHeartUnlike = $('.icon-heart--unlike')
                const iconHeartLike = $('.icon-heart--like')
    
                if(iconHeartUnlike){
                    iconHeartUnlike.addEventListener('click', (e) => {
                        iconHeartUnlike.classList.remove('active')
                        iconHeartLike.classList.add('active')
                    })
                }
                if(iconHeartLike){
                    iconHeartLike.addEventListener('click', (e) => {
                        iconHeartLike.classList.remove('active')
                        iconHeartUnlike.classList.add('active')
                    })
                }
    
                const iconBookmarkNone = $('.icon-bookmark--none')
                const iconBookmarkSave = $('.icon-bookmark--save')
    
                if(iconBookmarkNone){
                    iconBookmarkNone.addEventListener('click', (e) => {
                        iconBookmarkNone.classList.remove('active')
                        iconBookmarkSave.classList.add('active')
                    })
                }
                if(iconBookmarkSave){
                    iconBookmarkSave.addEventListener('click', (e) => {
                        iconBookmarkSave.classList.remove('active')
                        iconBookmarkNone.classList.add('active')
                    })
                }
            }))
    
            let index = 0 ;
            const body = $('body') ;
            body.addEventListener("click", function(e){
                console.log(e.target)
                if (e.target.matches('.cover')){
                    e.target.parentNode.removeChild(e.target)
                }
                if (e.target.matches('.icon-times')){
                    let temp = $('.slider__cover')
                    body.removeChild(temp)
                }
                
                
                if (e.target.matches('.image-next')){
                    let image = $('.image')
                    let currenImg = image.getAttribute('src') ;
                    index = [...images].findIndex(item => item.getAttribute('src') === currenImg)
    
                    index++ ;
                    if (index >= images.length){ // index == images.length
                        index = 0 ;
                    }
                    currenImg = [...images][index].getAttribute('src') ;
                    image.setAttribute('src', currenImg)
                }
    
                else if (e.target.matches('.image-pre')){
                    let image = $('.image')
                    let currenImg = image.getAttribute('src') ;
                    index = [...images].findIndex(item => item.getAttribute('src') === currenImg)
    
                    index-- ;
                    if (index < 0){
                        index = images.length - 1 ;
                    }
                    currenImg = [...images][index].getAttribute('src') ;
                    image.setAttribute('src', currenImg)
                }

                
            })
            
            let ulElement = $('.input__suggestion-container')
            ulElement.onmousedown = function(e) {
                e.preventDefault() ;
            }

            const containerMain = $('.container-color')
            const iconHeart = $('.icon-heart-img')
            const iconUnHeart = $('.icon-unheart-img')
            const iconHeartLink = $('.icon-heart')
            const iconUnHeartLink = $('.icon-unheart')
            if (iconHeart) {
                iconUnHeart.addEventListener('click', () =>{
                    iconHeartLink.classList.add('active')
                    iconUnHeartLink.classList.remove('active')
                })
                containerMain.addEventListener('click', () =>{
                    iconUnHeartLink.classList.add('active')
                    iconHeartLink.classList.remove('active')
                })
                iconHeart.addEventListener('click', () =>{
                    iconUnHeartLink.classList.add('active')
                    iconHeartLink.classList.remove('active')
                })
            }

            const header = $('.page header')
            const iconHeart2 = $('.icon-heart-img2')
            const iconUnHeart2 = $('.icon-unheart-img2')
            const iconHeartLink2 = $('.icon-heart2')
            const iconUnHeartLink2 = $('.icon-unheart2')
            if (iconUnHeart2) {
                iconUnHeart2.addEventListener('click', () =>{
                    iconHeartLink2.classList.add('active')
                    iconUnHeartLink2.classList.remove('active')
                    header.style.zIndex = 0
                })
                iconHeart2.addEventListener('click', () =>{
                    iconUnHeartLink2.classList.add('active')
                    iconHeartLink2.classList.remove('active')
                    header.style.zIndex = 1
                })
            }

            const iconMess1 = $('.icon-message-img')
            const iconUnMess1 = $('.icon-unmessage-img')
            const iconMessLink1 = $('.icon-message')
            const iconUnMessLink1 = $('.icon-unmessage')
            if (iconUnMess1) {
                iconUnMess1.addEventListener('click', (e) => {
                    iconMessLink1.classList.add('active')
                    iconUnMessLink1.classList.remove('active')
                })
                iconMess1.addEventListener('click', (e) => {
                    iconMessLink1.classList.remove('active')
                    iconUnMessLink1.classList.add('active')
                })
                containerMain.addEventListener('click', (e) => {
                    iconMessLink1.classList.remove('active')
                    iconUnMessLink1.classList.add('active')
                })
            }
        },
        start: function(){
            this.render()
            this.handleEvent()
        }
    }
    search.start()
}
