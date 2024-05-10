let bar = document.querySelector('.bar')
let nav_item = document.querySelector('.nav_item')

bar.addEventListener('click',() => {
    console.log('dfdf')
    nav_item.classList.toggle('nav_item_active')
})