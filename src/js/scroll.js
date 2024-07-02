
// img 생성
let pTags ='';
let imgFolder = 'src/images/contents/'

for(let i =0; i<=251; i++){ 
    pTags = document.createElement('img');
    if(i >= 0 && i < 10){
        pTags.setAttribute('src','src/images/contents/NAVER_1784_PC_Half_0000'+ i + '.jpg');
    }
    else if(i >= 10 && i < 100){
        pTags.setAttribute('src','src/images/contents/NAVER_1784_PC_Half_000'+ i + '.jpg');
    }
    else if(i >= 100){
        pTags.setAttribute('src','src/images/contents/NAVER_1784_PC_Half_00'+ i + '.jpg');
    }
    document.querySelector('.wrap').append(pTags);
}

// img 생성


// scroll event

window.addEventListener('scroll',function(){
    let scTop = Math.floor(window.scrollY);
    console.log(scTop);
    imgScroll();
    TextScroll();
    
    function imgScroll(){
        let imgs = document.querySelectorAll('.wrap img');
        for(let i = 1; i < imgs.length; i++){
            let x = i * 90;
            imgs[i].classList.remove('on');

            if(scTop === 0){
                imgs[0].style.display = 'block';

            }
            else if(scTop >= x){
                imgs[0].style.display= 'none';
                imgs[i].classList.add('on');
                imgs[i].previousElementSibling.classList.remove('on');
            }
            
            else{
                imgs[i].classList.remove('on');
            }
        }
    }
    function TextScroll(){
        let titles = document.querySelectorAll('.titleWrap .title');
        //6번째에 중앙으로 애니메이션

        titles[0]

    }
});
// scroll event

