let $tabs = document.querySelectorAll('.tabs_wrap ul li');

let $reserva = document.querySelectorAll('.reserva')
let $granReserva = document.querySelectorAll('.granReserva')
let $specialCollection = document.querySelectorAll('.specialCollection')
let $all = document.querySelectorAll('.list-unstyled')


$tabs.forEach(tabs => {
    tabs.addEventListener('click', (ev) => {
        $tabs.forEach(tabs => tabs.classList.remove('active'))

        ev.target.classList.add('active');

        const tabVal = ev.target.getAttribute('data-tabs');

        $all.forEach(all => tabVal === 'all' ? all.style.display = 'block' : all.style.display = 'none')

        tabVal === 'reserva' ? $reserva.forEach(reserva => reserva.style.display = 'block') : null;

        tabVal === 'granReserva' ? $granReserva.forEach(granReserva => granReserva.style.display = 'block') : null;

        tabVal === 'specialCollection' ? $specialCollection.forEach(specialCollection => specialCollection.style.display = 'block') : null;

    })
})


const $searchBar = document.getElementById('searchBar')

$searchBar.addEventListener('keyup', (ev) => {
    const txt = ev.target.value.toLowerCase();
    const wines = document.querySelectorAll('#containerWines li')

    wines.forEach(wine => {
        const wineName = wine.dataset.item
        wineName.toLowerCase().indexOf(txt) !== -1 ? wine.style.display = 'block' : wine.style.display = 'none'
    })
})



   
