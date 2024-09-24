// elementi catturati
let cardsWrapper = document.querySelector(`#cardsWrapper`);
let showContactsBtn = document.querySelector(`#showContactsBtn`);
// array

let rubrica ={
    contacts : [
    {name: `Michele`, number: 118 },
    {name: `Mazinger`, number: 119 },
    {name: `Narcos`, number: 120 },
],

// funzioni
showcontacts: function () {
    this.contacts.forEach((contact)=>
    {
        let div = document.createElement(`div`);
        div.classList.add(`col-12`, `col-md-7`);
        div.innerHTML = `
                    <div class="cardCustom ">
                <p>Nome: ${contact.name}</p>
                <p>Numero: ${contact.number}</p>
                <i class="bi bi-trash3-fill"></i>
            </div>
        `

        cardsWrapper.appendChild(div);
    }
    )
}

}

let aprirubrica = false;

showContactsBtn.addEventListener(`click`, ()=>{

    if (aprirubrica == false) {
        rubrica.showcontacts();
 aprirubrica = true;
    } else {
        cardsWrapper.innerHTML=` `;
        aprirubrica = false;

    }


})

