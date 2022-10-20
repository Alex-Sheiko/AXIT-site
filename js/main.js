function initTabs (){
    let tabNav = document.querySelectorAll('.tabs-nav__item');

    tabNav.forEach(item => {
        item.addEventListener('click',() => selectTabNav(tabNav,item))
    });

    function selectTabNav(items, currentItem){
        items.forEach(item => {
            item.classList.remove('is-active')
        });
        currentItem.classList.add('is-active');
        let tabName = currentItem.getAttribute('data-tab-name');
        selectTabContent(tabName)
    }

    function selectTabContent(tabName) {
        let tabContent = document.querySelectorAll('.tabs-content__inner');
        tabContent.forEach(item => {
            item.classList.contains(tabName)? item.classList.add('is-active') : item.classList.remove('is-active')
        })
    }
}

initTabs();

const myAtropos = Atropos({
    el: '.my-atropos',
    shadow:false,
    highlight: false,
});

const myAtropos2 = Atropos({
    el: '.my-atropos-2',
    shadow:false,
    highlight: false,
});


const myAtropos3 = Atropos({
    el: '.my-atropos-3',
    shadow:false,
    highlight: false,
});

AOS.init();

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android()
            || isMobile.BlackBerry()
            || isMobile.iOS()
            || isMobile.Opera()
            || isMobile.Windows()
        );
    }
};

if (isMobile.any()){
    document.body.classList.add('_touch');
}else {
    document.body.classList.add('_pc')
}

const iconMenu = document.querySelector('.menu__icon');
const bodyMenu = document.querySelector('.menu');
if (iconMenu){
    iconMenu.addEventListener('click', function (e){
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        bodyMenu.classList.toggle('_active')
    });
}

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length>0){
    menuLinks.forEach(menuLink =>{
        menuLink.addEventListener('click', onMenuLinkClick );
    });

    function onMenuLinkClick (e){
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__top').offsetHeight;

            if (iconMenu.classList.contains('_active')){
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active')
                bodyMenu.classList.remove('_active')
            }

            window.scrollTo({
                top:gotoBlockValue,
                behavior:"smooth"
            });
            e.preventDefault();
        }
    }
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {

        320: {
            slidesPerView: 1,
        },

        767: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});



