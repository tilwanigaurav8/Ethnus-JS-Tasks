let db=document.getElementById('db');
let tb=document.getElementById('tb');
let dp=document.getElementById('dp');
let tp=document.getElementById('tp');

function getd(){
    var d=new Date()
    var da=d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
    dp.innerHTML=da;
}
db.addEventListener('click',getd);

function gett(){
    var d=new Date()
    tp.innerHTML=d;
}
tb.addEventListener('click',gett);