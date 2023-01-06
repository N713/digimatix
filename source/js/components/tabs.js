const tabs = document.body.querySelectorAll('.offers__tabs h3');
const lists = document.body.querySelectorAll('.offers__list');

const setTabs = () => {
    if (tabs.length === lists.length) {
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                tabs.forEach((item) => {
                    item.classList.remove('active');
                })

                tab.classList.add('active');

                lists.forEach((list) => {
                    list.classList.add('none');
                });

                lists[index].classList.remove('none');
            });
        });
    } 
}

export {setTabs}
