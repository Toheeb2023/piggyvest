const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');
const cols = document.querySelector('.show-links');
// const bar = document.querySelector('.bar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    links.classList.toggle('active'); 
    // bar.classList.toggle('active');
})
// if(hamburger.classList.contains('active')){
    // hamburger.classList.style = '#144499'
    // hamburger.classList.style.color = '#144499'
document.querySelectorAll('.li').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active')
    links.classList.remove('active')
}))

// bar.style.backgroundColor = '#5d5a5a';