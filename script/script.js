let listHtml2 = document.querySelector('.carousel .thumbnail');
let listHtml = document.querySelector('.carousel .list');
let preButton = document.getElementById('pre');
let nextButton = document.getElementById('next');
let coreusel = document.querySelector('.carousel');

preButton.onclick = function () {
    moveSlide('pre');
}
nextButton.onclick = function () {
    moveSlide('next');
}

function moveSlide(type) {
    let item = document.querySelectorAll('.carousel .list .item');
    let item2 = document.querySelectorAll('.carousel .thumbnail .item');
    coreusel.classList.remove('pre','next')
    if (type ==='next') {
        listHtml.appendChild(item[0]);
        listHtml2.appendChild(item2[0]);
        coreusel.classList.add('next');
    }else{
        let positionLast = item.length -1;
        listHtml.prepend(item[positionLast]);
        listHtml2.prepend(item2[positionLast]);
        coreusel.classList.add('pre');
    }
}