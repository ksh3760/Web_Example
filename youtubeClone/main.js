const moreBtn = document.querySelector('.info .meta .moreBtn');
const title = document.querySelector('.info .meta .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});