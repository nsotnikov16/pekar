// Проверка поддержки webp
function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
// Добавление класса _webp или _no-webp для HTML
testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
});

const sensor = !!('ontouchstart' in window)

// Шапка
const header = document.querySelector('.header')
const headerContainer = header.querySelector('.header .page__container')
const burger = header.querySelector('.header__burger')
if (!sensor) {
    burger.addEventListener('mouseenter', () => header.classList.add('open-menu'))
    headerContainer.addEventListener('mouseleave', () => header.classList.remove('open-menu'))
} else {
    burger.addEventListener('click', () => header.classList.toggle('open-menu'))
    document.addEventListener('click', ({ target }) => !headerContainer.contains(target) ? header.classList.remove('open-menu') : '')
}

// Баннер параллакс
const banner = document.querySelector('.banner')
if (banner) {

    document.addEventListener('scroll', (e) => {
        const scrollPosition = document.documentElement.scrollTop

        banner.style.backgroundPositionY = `calc(50% + ${scrollPosition}px)`
        scrollPosition == 0 ? banner.style.backgroundPositionY = 'center' : ''
            
        
    })
}


/* const anim = lottie
const a = anim.loadAnimation({
    container: document.querySelector('#lottie-test'),
    render: 'canvas',
    loop: true,
    autoplay: true, 
    path: './js/lottie.json'
}) */
