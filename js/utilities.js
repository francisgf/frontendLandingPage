const UtilitiesJS = {
    consultarArchivosJson: (method, url, isAsinc, nameFuntion) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, isAsinc);
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let text = JSON.parse(this.responseText);
                nameFuntion(text);
            }
        };
        xhr.send();
    }

}


//llamada para llenar categorias
// let allCategories = JSON.parse(this.responseText);
// allCategories.allCategories.map(o=> console.log(o));