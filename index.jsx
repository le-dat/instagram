const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

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

let videos = $$('.container__video')
if(videos){
    videos.forEach(video => video.addEventListener('click' , (e) => {
        let temp = `<div class="cover">
                        <i class="fas fa-chevron-circle-left image-pre"></i>  
                        <video controls autoplay class="video" src="${e.target.getAttribute('src')}"></video>
                        <i class="fas fa-chevron-circle-right image-next"></i> 
                    </div>`
        document.body.insertAdjacentHTML('beforeend',temp) ;
    }))
}

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

    let image = $('.image')
    if(images && image != null){
        if (e.target.matches('.image-next')){
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
            let currenImg = image.getAttribute('src') ;
            index = [...images].findIndex(item => item.getAttribute('src') === currenImg)
    
            index-- ;
            if (index < 0){
                index = images.length - 1 ;
            }
            currenImg = [...images][index].getAttribute('src') ;
            image.setAttribute('src', currenImg)
        }
    }

    let video = $('.video')
    if (videos && video != null){
        if (e.target.matches('.image-next')){
            let currentVideo = video.getAttribute('src')
            index = [...videos].findIndex(item => item.getAttribute('src') === currentVideo)
            index++ ;
            if (index >= videos.length){
                index = 0 ;
            }
            currentVideo = [...videos][index].getAttribute('src')
            video.setAttribute('src', currentVideo)
        }

        else if (e.target.matches('.image-pre')) {
            let currentVideo = video.getAttribute('src')
            index = [...videos].findIndex(item => item.getAttribute('src') === currentVideo)
            index-- ;
            if (index < 0){
                index = videos.length - 1
            }
            currentVideo = [...videos][index].getAttribute('src')
            video.setAttribute('src', currentVideo)
        }
    }
})

let storyItems = $$('.story__item') ;
storyItems.forEach(storyItem => storyItem.addEventListener('click', (e) => {
    let temp = `<div class="slider__cover">
    <i class="fas fa-times icon-times size-m hide-on-phone"></i>
    <section class="slider__container">
        <i class="fas fa-chevron-circle-left slider__pre"></i>
        <i class="fas fa-chevron-circle-right slider__next"></i>
        <div class="sliders">
            <header class="slider__heading">
                <div class="timelines">
                    <div class="timeline active"></div>
                    <div class="timeline"></div>
                    <div class="timeline"></div>
                    <div class="timeline"></div>
                    <div class="timeline"></div>
                </div>
                <div class="user-story">
                    <img src="./asset/img/1.jpg" alt="user__avatar" class="user__avatar">
                    <span class="user__title">summer 2020</span>
                    <span class="user__time">126w</span>
                    <i class="fas fa-play icon-play size--m active hide-on-phone"></i>
                    <i class="fas fa-pause icon-pause size--m"></i>
                    <i class="fas fa-volume-up icon-volume-up size--m hide-on-phone"></i>
                    <i class="fas fa-volume-mute icon-volume-mute size--m active hide-on-phone"></i>
                    <i class="fas fa-ellipsis-h icon-ellipsis size--m active "></i>
                    <i class="fas fa-times icon-times size-m hide-on-table hide-on-pc"></i>
                </div>
            </header>
            <div class="slider">
                <img src="./asset/img/1.jpg" alt="" class="slider__img">
                <img src="./asset/img/2.jpg" alt="" class="slider__img">
                <img src="./asset/img/3.jpg" alt="" class="slider__img">
                <img src="./asset/img/101.jpg" alt="" class="slider__img">
                <img src="./asset/img/11.jpg" alt="" class="slider__img">
            </div>
        </div>
    </section>
                </div>`
    document.body.insertAdjacentHTML('beforeend',temp);

    const slider = $('.slider')
    const sliderImgs = $$('.slider__img') 
    const sliderNext = $('.slider__next')
    const sliderPrev = $('.slider__pre')
    const timelines = $$('.timeline')

    let counter = 0 ;
    const size = sliderImgs[0].offsetWidth;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)' ;

    sliderNext.addEventListener('click', (e) => {
        if (counter >= sliderImgs.length - 1) return ;
        counter++ ;
        slider.style.transform = 'translateX(' + (-size * counter) +'px)'
        timelines[counter].classList.add('active')
    })
    sliderPrev.addEventListener('click', (e) => {
        if (counter <= 0) return ;
        timelines[counter].classList.remove('active')
        counter -- ;
        slider.style.transform = 'translateX(' + (-size * counter) +'px)'
        timelines[counter].classList.add('active')
    })

    // showSlide ()
    function showSlide(){
        timelines[counter].classList.add('active')
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)' ;
        counter ++ ;

        setTimeout(showSlide, 2000)
    }

    const iconVolumeUp = $('.icon-volume-up')
    const iconVolumeMute = $('.icon-volume-mute')

    iconVolumeUp.addEventListener('click', () => {
        iconVolumeUp.classList.remove('active')
        iconVolumeMute.classList.add('active')
    })
    iconVolumeMute.addEventListener('click', () => {
        iconVolumeMute.classList.remove('active')
        iconVolumeUp.classList.add('active')
    })

    const iconPlay = $('.icon-play')
    const iconPause = $('.icon-pause')

    iconPlay.addEventListener('click', (e) => {
        iconPlay.classList.remove('active')
        iconPause.classList.add('active')
    })
    iconPause.addEventListener('click', (e) => {
        iconPause.classList.remove('active')
        iconPlay.classList.add('active')
    })
}))


const tabs = $$('.tab-item')
const containers = $$('.container') 

const tabActive = $('.tab-item.active') 
const line = $('.tab-line') ;

if (line){
    line.style.left = tabActive.offsetLeft + 'px'
    line.style.width = tabActive.offsetWidth + 'px' ;
}

if(tabs){
    tabs.forEach ((tab, index) => {
        const container = containers[index] ;
        tab.onclick = function(){
            $('.tab-item.active').classList.remove('active') ;
            $('.container.active').classList.remove('active')
            tab.classList.add('active') 
            container.classList.add('active')
    
            line.style.left = tab.offsetLeft + 'px' ;
            line.style.width = tab.offsetWidth + 'px' ;
        }
    })
}


let ulElement = $('.input__suggestion-container')
ulElement.onmousedown = function(e) {
    e.preventDefault() ;
}

const iconHeartUnlike = $$('.icon-heart--unlike')
const iconHeartLike = $$('.icon-heart--like')

if(iconHeartUnlike){
    iconHeartUnlike.forEach((item) => item.addEventListener('click', (e) => {
        item.classList.remove('active')
        item.parentNode.children[1].classList.add('active')
    }))
}
if(iconHeartLike){
    iconHeartLike.forEach((item) => item.addEventListener('click', (e) => {
        item.classList.remove('active')
        item.parentNode.children[0].classList.add('active')
    }))
}


const iconBookmarkNone = $$('.icon-bookmark--none')
const iconBookmarkSave = $$('.icon-bookmark--save')

if (iconBookmarkNone){
    iconBookmarkNone.forEach(item => item.addEventListener('click', (e) => {
        item.classList.remove('active');
        item.parentNode.children[1].classList.add('active');
    }))
}
if (iconBookmarkSave){
    iconBookmarkSave.forEach(item => item.addEventListener('click', (e) => {
        item.classList.remove('active');
        item.parentNode.children[0].classList.add('active');
    }))
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
        header.style.zIndex = 2
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


// story--next / pre in pc
const storyPre = $('.story--pre')
const storyNext = $('.story--next')
const story = $('.story__list')
const storyCover = $('.story__list-border')
const storyItem = $$('.story__item')[0]
if (storyCover){
    // story.style.width = `${storyItem.offsetWidth * story.children.length}px`

    const storyWidth = story.offsetWidth
    const storyCoverWidth = storyCover.offsetWidth
    var sizeMinus = storyWidth - storyCoverWidth

    story.style.transition = 'transform 0.3s ease-in-out'
    storyNext.addEventListener('click', (e) => {
        if (sizeMinus > 0 && sizeMinus < storyCoverWidth) {
            story.style.transform = 'translateX(' + (-sizeMinus) +'px)'
        }
    })
    storyPre.addEventListener('click', (e) => {
        if (sizeMinus > 0 && sizeMinus < storyCoverWidth ) {
            story.style.transform = 'translateX(0)'
        }
    })
}

