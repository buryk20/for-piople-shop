const popUpBrWrp = document.querySelector('[data-pop-up-br]');
const popUpBtnCloseDr = popUpBrWrp.querySelector('[data-pop-up-btn-close-br]');
const popUpWrpCont = popUpBrWrp.querySelector('[data-pop-up-wrp-cont-br]');

if(popUpBrWrp) {
    setTimeout(delActivePopUpBr, 3000, popUpBrWrp);
    eventFunction(popUpBtnCloseDr, popUpBrWrp);
    popUpWrpCont.addEventListener('click', function(event) {
        event.stopPropagation();
    });
    eventFunction(popUpBrWrp, popUpBrWrp);
}

function delActivePopUpBr(param) {
    param.classList.remove('active');
}

function eventFunction(elem, param) {
    elem.addEventListener('click', function () {
        delActivePopUpBr(param);
    });
}