const hamburger = document.querySelector('.hamburger');
// const bar = document.querySelectorAll('.bar');
const links = document.querySelector('.links');
const cols = document.querySelector('.show-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    links.classList.toggle('active'); 
})
    
document.querySelector('.bar').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.toggle('active');
}))

document.querySelectorAll('.li').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active')
    links.classList.remove('active')
}))
