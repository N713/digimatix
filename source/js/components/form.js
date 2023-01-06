const form = document.body.querySelector('.form');
const inputs = form.querySelectorAll('.form input');

const setForm = () => {
    form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        let errors = false;

        inputs.forEach((input) => {
            if (!input.value || input.value === '') {
                input.classList.add('error');
                errors = true;
                return;
            } else {
                input.classList.remove('error');
            }
        });

        if (errors === false) {
            document.body.querySelector('.form').classList.add('none');
            document.body.querySelector('.questions h2').textContent = 'Спасибо!';
            document.body.querySelector('.questions p').textContent = 'Мы обязательно свяжемся с вами';
        }
    });
}

export {setForm}
