let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');


onload = function () {
    if (navigator.onLine) {
        online();
    } else {
        offline();
    }
}

window.addEventListener('online', function(){
    online();
});
window.addEventListener('offline', function(){
    offline();
});


function online() {
    title.innerHTML = 'Online Now';
    title.style.color = 'green';
    ul.classList.add('hide');
    reload.classList.add('hide');
}


function offline() {
        title.innerHTML = 'Offline Now';
        title.style.color = '#333';
        ul.classList.remove('hide');
        reload.classList.remove('hide');
}

reload.onclick = function () {
    location.reload();
}
