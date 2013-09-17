function escribir(letra)
{
    console.log(letra);
}


function escribir_palabra(escribir,palabra) {
    for (i=0;i < palabra.length ; i++) {
        escribir(palabra[i]);
    }
}

escribir_palabra(escribir,'sajidcito');

