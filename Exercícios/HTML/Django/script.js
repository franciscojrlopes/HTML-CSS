function gritar() {
    alert('Ahhhhhhhhhhhhhhhhhhhhhhhhhhhhh!');
}

function Perguntar() {
    var nome;
    nome = prompt('Qual é o seu nome?');
    alert("Olá " + nome);}

function mudar_texto(){

    var h1 = document.getElementsByTagName('h1')
    // h1[0].innerText = 'Evolua para Python Django'
    if (h1[0].innerText == 'JS com Django'){h1[0].innerText = 'Evolu para Python Django';}
    else{h1[0].innerText = 'JS com Django'}  
}

function incrementar(){
    var p1 = document.getElementById('p1');
    p1.innerText = parseInt(p1.innerText) + 1;
}