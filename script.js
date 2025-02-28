var btn=document.querySelector('.btn');
var menu=document.querySelector('.menu');
    btn.addEventListener('click', function(){
        menu.classList.toggle('active');
    });
    var navLink=document.querySelector('ul li a');
    for (var i=0; i <navLink.length; i++) {
        navLink[i].addEventListener('click', function(){
            menu.classList.remove('active')
        });
    }