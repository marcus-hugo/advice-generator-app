
const btn = document.querySelector('.card__btn')

btn.addEventListener('click', () => {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
        document.getElementById('app').innerHTML = `
            <div class="card">
                <h1 class="card__title">Advice # ${data.slip.id}</h1>
                <p class="card__text">${data.slip.advice}</p>
            </div>
        `
    })
})
