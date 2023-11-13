const $ = document;

const generatorBtn = $.querySelector('button');
const card = $.querySelector('.card')
const input = $.querySelector('input');
const img = $.querySelector('img');



const showQRCode = () => {
    let inputValue = input.value.trim()

    img.setAttribute('src', `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`)
    img.addEventListener('load', () => {
        card.classList.add('active')
    })
}

generatorBtn.addEventListener('click', showQRCode);
addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        showQRCode()
    }
})