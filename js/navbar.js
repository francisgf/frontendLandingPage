const navbarJS = {
    llenarNavbar: (dataNavbar) => {
        if (dataNavbar != null && dataNavbar != undefined) {
            const menu = document.querySelector('ul.enlaces');
            const logo = document.querySelector('div.logo');
            menu.innerHTML = '';
            logo.innerHTML = `<img src="resources/Imagenes/${dataNavbar.logo.imageLogo}" alt="${dataNavbar.logo.nombreLogo}">`;
            dataNavbar.allCategories.forEach(element => {
                menu.innerHTML += `<li><a href="${element.redireccion}">${element.nombreCategoria}</a></li>`;
            });
            navbarJS.desplegarMenu();
        }
    },
    desplegarMenu: () => {
        const boton = document.querySelector('.boton')
        if (boton) {
            boton.addEventListener('click', () => {
                const menu = document.querySelector('.enlaces')
                menu.classList.toggle('show')
            })
        }
    }
}

addEventListener('load', () => {
    UtilitiesJS.consultarArchivosJson('GET', '../resources/JSON/menu.json', true, navbarJS.llenarNavbar);
});