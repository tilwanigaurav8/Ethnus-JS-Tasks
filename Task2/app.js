let b3p=document.getElementById('b3p');
let b2p=document.getElementById('b2p');
let b2f=document.getElementById('b2f');
let b1f=document.getElementById('b1f');

function p2p(){
    window.location.href=".\home.html";
}
function p3p(){
    window.location.href=".\index.html";
}
function p2f(){
    window.location.href=".\last.html";
}
function p1f(){
    window.location.href=".\index.html";
}

b3p.addEventListener('click',p3p);
b2p.addEventListener('click',p2p);
b2f.addEventListener('click',p2f);
b1f.addEventListener('click',p1f);