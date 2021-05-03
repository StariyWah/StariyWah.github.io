$(document).scroll(function(){
        const header = pageYOffset;
        const header__menu = document.querySelector('.header__menu');
    if(pageYOffset >= document.querySelector('.block__one').offsetHeight && header__menu.classList.contains('_active') == false){
        header__menu.classList.toggle('_active');
    }else if(pageYOffset < document.querySelector('.block__one').offsetHeight && header__menu.classList.contains('_active') == true){
        header__menu.classList.remove('_active');
    }
    });


const Links = document.querySelectorAll('.link[data-goto]');
if(Links.length > 0){
    Links.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
function onMenuLinkClick(e){
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__menu').offsetHeight;
       window.scrollTo({
           top: gotoBlockValue,
           behavior: "smooth"
       });
   }
}
}

const read__less = document.querySelectorAll('.read__less');
const read__more = document.querySelector('.read__more');
const content = document.querySelector('.slide__content');
$(read__less).click(function(){
    content.classList.toggle('_false');
    read__more.classList.remove('_false');
    read__more.classList.toggle('_true');
});

$(read__more).click(function(){
    content.classList.remove('_false');
    read__more.classList.toggle('_false');
    read__more.classList.remove('_true');
});
/*alert ($(window).width());*/