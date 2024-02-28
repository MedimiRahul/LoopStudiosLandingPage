let hamburger=document.querySelector('.hamburger');
let menu=document.querySelector('.hamburgermenu');
let mainbody=document.querySelector('.mainbody');
let cross=document.querySelector('.cross');
cross.addEventListener('click',menuopen)
hamburger.addEventListener('click' , menuopen);

let statusmenu=false;

function menuopen(){
    if (event.target.classList[0]=='hamburger'){
        menu.classList.remove('hidden');
        statusmenu=true;
        mainbody.classList.add('overflow-y-hidden');
    }
    else if (event.target.classList[0]=='cross'){
        menu.classList.add('hidden');
        mainbody.classList.remove('overflow-y-hidden');

    }

}