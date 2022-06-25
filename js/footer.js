const footerJS = {
    llenarFooter: (datafooter) => {
        if (datafooter != null && datafooter != undefined) {
            const secundario = document.querySelector('div.secundario');
            var contenido = '';
            const terciario = document.querySelector('div.terciario');

            datafooter.allCategories.forEach(element => {
                contenido += `<div class="colum">
                                            <h3 class="title">${element.nombreCategoria}</h3>
                                            <ul class="enlaces">`;
                element.subCategorias.forEach(sub => {
                    contenido += `<li><a href="#">${sub.nombreSubCategoria}</a></li>`;
                    console.log(sub);
                });
                contenido += `</ul>
                </div>`;
            });
            secundario.innerHTML = contenido;

            contenido = `<div class="row">
                            <h3>${datafooter.redesCategoria}</h3>`;
            datafooter.subCategoria.forEach(element => {
                contenido += `<a href="${element.redireccion}"><i class="${element.imagenlogo}"></i></<a>`
            });
            contenido += `</div>
                        <div class="row2">
                            <p>Copyright 2021 - "Nombre". Todos los derechos reservados
                        </div>`;
            terciario.innerHTML = contenido;
        }
    }
};

addEventListener('load', () => {
    UtilitiesJS.consultarArchivosJson('GET', '../resources/JSON/footer.json', true, footerJS.llenarFooter);
});