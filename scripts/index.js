let body = document.querySelector('body'),
    count = 0;

document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle("animate");
    body.style.overflowY = 'hidden';
    ++count;
    if (count == 2) {
        body.style.overflowY = 'visible';
        count = 0;
    }
});

