let uploadedLogoSrc = ''; 

function changeColor(color) {
    const umbrella = document.getElementById('umbrella');
    const logo = document.getElementById('logo');
    const loaders = {
        blue: document.getElementById('blue-loader'),
        pink: document.getElementById('pink-loader'),
        yellow: document.getElementById('yellow-loader'),
    };
    const body = document.body;
    const uploadBtn = document.querySelector('.upload-btn');

    umbrella.style.visibility = 'hidden';
    Object.values(loaders).forEach(loader => loader.style.display = 'none');

    setTimeout(() => {
        switch (color) {
            case '#FFFF00': 
                umbrella.src = '/assests/Yellwo umbrella.png';
                body.style.backgroundColor = '#FFFFED';
                uploadBtn.style.backgroundColor = '#FED34A';
                loaders.yellow.style.display = 'block';
                break;
            case '#FF00FF':
                umbrella.src = '/assests/Pink umbrella.png';
                body.style.backgroundColor = '#FFC0CB';
                uploadBtn.style.backgroundColor = '#DA3C90';
                loaders.pink.style.display = 'block';
                break;
            default:
                umbrella.src = '/assests/Blue umbrella.png';
                body.style.backgroundColor = '#e7f6fd';
                uploadBtn.style.backgroundColor = '#31B4E7';
                loaders.blue.style.display = 'block';
        }

        if (uploadedLogoSrc) {
            logo.src = uploadedLogoSrc;
            logo.style.display = 'block';
        }
    }, 500);

    setTimeout(() => {
        Object.values(loaders).forEach(loader => loader.style.display = 'none');
        umbrella.style.visibility = 'visible';
    }, 2000);
}

function uploadLogo(event) {
    const dynamicSign = document.getElementById('dynamic-sign');
    const fileName = document.getElementById('file-name');
    const whiteLoader = document.getElementById("white-loader");
    const closeSign = document.getElementById('close');
    const logo = document.getElementById('logo');

    const file = event.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds the maximum limit of 5MB.');
        return;
    }

    const reader = new FileReader();

    whiteLoader.style.display = 'block';
    dynamicSign.style.display = 'none';
    closeSign.style.visibility = 'visible';

    reader.onload = function (e) {
        uploadedLogoSrc = e.target.result;
        logo.src = uploadedLogoSrc;
        logo.style.display = 'block';

        const maxLength = 15;
        let displayFileName = file.name.length > maxLength ? file.name.slice(0, maxLength) + '...' : file.name;
        fileName.textContent = displayFileName.toUpperCase();

        setTimeout(() => {
            whiteLoader.style.display = 'none';
            dynamicSign.style.display = 'block';
        }, 1000);
    };

    reader.readAsDataURL(file);

    closeSign.onclick = function (event) {
        event.stopPropagation();
        uploadedLogoSrc = '';
        logo.src = '';
        logo.style.display = 'none';
        fileName.textContent = 'UPLOAD LOGO';
        closeSign.style.visibility = 'hidden';
        dynamicSign.style.display = 'block';
    };
}