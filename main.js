function leiaMais(n){
    var mais = document.querySelector('.mais'+n);
    var pontos = document.querySelector('.pontos'+n);
    var btn = document.querySelector('btn'+n);
    var txtbtn = document.querySelector('txtbtn'+n);

    if(mais.style.display === 'block') {
        mais.style.display = 'none';
        pontos.style.display = 'block';
    } else {
        mais.style.display = 'block';
        pontos.style.display = 'none';
    }
}

