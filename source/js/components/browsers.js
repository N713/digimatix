const user = detect.parse(navigator.userAgent);
const warning = document.body.querySelector('.warning');
const closeWarning = warning.querySelector('button');

const chrome = {
    family: 'Chrome',
    version: 108,
    link: 'https://www.google.com/intl/ru/chrome/update/'
};

const opera = {
    family: 'Opera',
    version: 94,
    link: 'https://www.opera.com/ru/computer/thanks?ni=stable&os=mac&edition=Yx+05'
};

const firefox = {
    family: 'Firefox',
    version: 108,
    link: 'https://www.mozilla.org/ru/firefox/download/thanks/'
};

const ie = {
    family: 'Internet Explorer',
    version: 10,
    link: 'https://www.microsoft.com/ru-ru/download/internet-explorer.aspx'
};

const edge = {
    family: 'Edge',
    version: 108,
    link:  'https://www.microsoft.com/ru-ru/edge/home?form=MA13FJ#evergreen'
};

const browsers = [chrome, opera, firefox, ie, edge];

const setBrowsers = () => {
    closeWarning.addEventListener('click', (evt) => {
        evt.preventDefault();
        warning.classList.add('none');
    });
    
    browsers.forEach((browser) => {
        if (user.browser.family === browser.family && parseInt(user.browser.version, 10) < browser.version) {
            warning.classList.remove('none');
            warning.querySelector('a').setAttribute('href', browser.link);
        }
    });
}

export {setBrowsers}
