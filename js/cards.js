const cardsJS = {
    llenarCards: (dataCards) => {
        if (dataCards != null && dataCards != undefined) {
            const containerCards = document.querySelector('div#services-detail');
            containerCards.innerHTML = ''
            dataCards.allServices.forEach(element => {
                containerCards.innerHTML += `<div class="card-services">
                <div id="image-card"><img src="${element.image}"></div>
                <div id="card">
                    <div id="info-service">
                        <p class="parrafo">
                            ${element.parrafo}
                        </p>
                    </div>
                    <div class="btn"><span class="span">${element.btn}</span></div>
                </div>
            </div>`;
            });

            $('div#card > div#info-service > p.parrafo > span').addClass("span");
        }
    }
}

addEventListener('load', () => {
    UtilitiesJS.consultarArchivosJson('GET', '../resources/JSON/cards.json', true, cardsJS.llenarCards);
});