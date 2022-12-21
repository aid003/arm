document.addEventListener('DOMContentLoaded', function() {

    document.addEventListener('click', function () {
        
        // burger menu 
        document.querySelector('.burger').addEventListener('click', function () {
            document.querySelector('.menu').classList.toggle("animate")
        });

    });
})

