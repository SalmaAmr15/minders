const filterButtons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product');
const bests = document.querySelectorAll('.best');


filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        products.forEach(product => {
            if (product.getAttribute('data-category') === filter) {
                product.classList.add('show');
                product.classList.remove('unchosen');
            } else {
                product.classList.remove('show');
                product.classList.add('unchosen');
            }
        });

        bests.forEach(best => {
            if (best.getAttribute('data-category') === filter) {
                best.classList.add('show');
                best.classList.remove('unchosen');
            } else {
                best.classList.remove('show');
                best.classList.add('unchosen');
            }
        });

        products.forEach(product => product.offsetHeight);
        bests.forEach(best => best.offsetHeight);
    });
});

