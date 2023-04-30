const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const popup = document.querySelector('.popup-container')

openBtn.addEventListener('click', ()=> {
    
    popup.classList.add('blur');
    popup.style.display = 'flex';
})

closeBtn.addEventListener('click', ()=>{
    popup.classList.remove('blur');
    popup.style.display='none';
})
