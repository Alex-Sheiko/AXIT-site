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
