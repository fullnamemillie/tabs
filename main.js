const btn = document.querySelectorAll('.tabs__nav-btn');
const tab = document.querySelectorAll('.tabs__item');

btn.forEach(function(item) {
    item.addEventListener('click', function() {

        let currentBtn = item;
        let btnId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(btnId);

        if (!currentBtn.classList.contains('active')) {
            tab.forEach(function(item) {
                item.classList.remove('active');
            });

            btn.forEach(function(item) {
                item.classList.remove('active');
            });
        };

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    });
});