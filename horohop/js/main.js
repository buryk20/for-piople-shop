const popUpBrWrp = document.querySelector('[data-pop-up-br]');

if(popUpBrWrp) {
    const popUpBtnCloseDr = popUpBrWrp.querySelector('[data-pop-up-btn-close-br]');
    const popUpWrpCont = popUpBrWrp.querySelector('[data-pop-up-wrp-cont-br]');
    const imgPopUpBt = popUpBrWrp.querySelector('[data-pop-up-br-img]');
    const popUpLinkBr = popUpBrWrp.querySelector('[data-pop-up-link-br]');

    const currentPath = window.location.pathname;

    let newSrc = '/content/uploads/images/pop-up-sale-ru.png';



    if (popUpBrWrp && !sessionStorage.getItem('popUpClosed')) {
        setTimeout(activePopUp, 2000, popUpBrWrp);
        setTimeout(delActivePopUpBr, 10000, popUpBrWrp);
        eventFunction(popUpBtnCloseDr, popUpBrWrp);
        popUpWrpCont.addEventListener('click', function(event) {
            event.stopPropagation();
        });
        eventFunction(popUpBrWrp, popUpBrWrp);

        popUpLinkBr.addEventListener('click', function(event) {
            delActivePopUpBr(popUpBrWrp);
        });

    } else {
        popUpBrWrp.classList.remove('active');
    }

    if (currentPath.includes('/ru/')) {
        imgPopUpBt.setAttribute('src', newSrc);
    }
}


function delActivePopUpBr(param) {
    param.classList.remove('active');
    sessionStorage.setItem('popUpClosed', true);
}

function eventFunction(elem, param) {
    elem.addEventListener('click', function () {
        delActivePopUpBr(param);
    });
}

function activePopUp(par) {
    par.classList.add('active');
}
