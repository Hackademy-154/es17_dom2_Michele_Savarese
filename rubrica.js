// elementi catturati
let cardsWrapper = document.querySelector(`#cardsWrapper`);
let showContactsBtn = document.querySelector(`#showContactsBtn`);
let addContactsBtn = document.querySelector(`#addContactsBtn`);
let nameInput = document.querySelector(`#nameInput`);
let numberInput = document.querySelector(`#numberInput`);
let removeContactBtn = document.querySelector(`#removeContactBtn`)
// console.dir(nameInput)
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
},

addContact : function (newName, newNumber){

this.contacts.push({name: newName, number: newNumber});

},

removeContact: function (RemoveName) {
let names = this.contacts.map((contact)=>contact.name);
let index = names.indexOf(RemoveName);
// console.log(index);

if (index > -1) {
    this.contacts.splice(index,1);

} else {
    alert(`Contatto non presente`)
}

}



}

addContactsBtn.addEventListener(`click`, ()=>
{
    if (nameInput.value !== '' && numberInput.value !== '') {
        rubrica.addContact(nameInput.value, numberInput.value);

    } else {
        alert(`Inserisci un nome e un numero`)
    }

})

removeContactBtn.addEventListener(`click`,()=>{
    rubrica.removeContact(nameInput.value, numberInput.value);

}
)

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

