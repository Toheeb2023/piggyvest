const hamburger = document.querySelector('.hamburger');
// const bar = document.querySelectorAll('.bar');
const links = document.querySelector('.links');
const cols = document.querySelector('.show-links');
const body = document.body;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    links.classList.toggle('active'); 
    body.classList.toggle('overflow');
})
    
document.querySelector('.bar').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    body.classList.toggle('overflow');
}))

document.querySelectorAll('.li').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active')
    links.classList.remove('active')
    body.classList.remove('overflow');
}))
