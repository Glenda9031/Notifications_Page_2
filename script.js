let count = 3;
let unread = document.querySelectorAll('.unread');
const plural = document.querySelector('.plural');
const countSpan = document.querySelector('.count');
const markAllAsRead = document.querySelector('.mark-as-read');

function removeDots(elem) {
    const dot = elem.querySelector('* > .dot');
    dot.remove();
}

function manageCount(count) {
    countSpan.textContent = count;

    if (count <= 1) {
        plural.style.display = 'none';
    }
}

unread.forEach(elem => {
    elem.addEventListener('click', () => {
        elem.classList.remove('.unread');
    })
})

