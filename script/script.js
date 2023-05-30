  // Obtener el elemento de entrada de texto
  var textoEncriptado = document.getElementById('textEncriptado');
  var botonCopiar = document.getElementById('botonCopiar');
  var input = document.getElementById('txtextoOriginal');
  textoEncriptado.style.display = 'none';
  botonCopiar.style.display = 'none';

  // Agregar un evento de escucha al evento 'input' para verificar el contenido ingresado
  input.addEventListener('input', function() {
  // Obtener el valor del campo de entrada
  var text = this.value;

 // Eliminar acentos utilizando una expresión regular
  var cleanText = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // Filtrar solo letras minúsculas
  cleanText = cleanText.replace(/[^a-z\s]/g, '');


  // Asignar el valor limpio al campo de entrada
  this.value = cleanText;
  });

function Encriptar()
{
    var input = document.getElementById('txtextoOriginal');
    var textoOriginal=input.value;
    var textoEncriptado="";
    var letraEncriptada="";
    for(let i=0;i<textoOriginal.length; i++) {
        const letra = textoOriginal[i];
        letraEncriptada="";
        switch (letra) {
            case "a":
            letraEncriptada="ai";
                break;
            case "e":
            letraEncriptada="enter";
                break;
            case "i":
            letraEncriptada="imes";
                break;
            case "o":
            letraEncriptada="ober";
                break;
            case "u":
            letraEncriptada="ufat";
                break;
            default:
            letraEncriptada=letra;
            break;
        }//fin switch
        textoEncriptado=textoEncriptado+letraEncriptada;
    }//fin for
    //console.log(textoEncriptado);
    var textEncriptado = document.getElementById('textEncriptado');
    var botonCopiar = document.getElementById('botonCopiar');

    var dibujo = document.getElementById('dibujo');
    var titulo = document.getElementById('titulo');
    var subTitulo = document.getElementById('subTitulo');
    var txtEncriptado = document.getElementById('txtEncriptado');

    textEncriptado.style.display = 'block';
    botonCopiar.style.display = 'block';

    dibujo.style.display = 'none';
    titulo.style.display = 'none';
    subTitulo.style.display = 'none';

    txtEncriptado.value = textoEncriptado;
}

function DesEncriptar()
{
    var input = document.getElementById('txtextoOriginal');
    console.log("este es el texto encriptado");
    console.log(input.value);
    var textoEncriptado=input.value;
    var Matriz=[["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]]
    var Matriz2=[{letra:"a",valor:"ai"},{letra:"e",valor:"enter"},{letra:"i",valor:"imes"},{letra:"o",valor:"ober"},{letra:"u",valor:"ufat"}]
    for(let i=0;i<Matriz2.length;i++){
        if(textoEncriptado.includes(Matriz2[i].valor)){
            textoEncriptado=textoEncriptado.replaceAll(Matriz2[i].valor,Matriz2[i].letra);
        }
    }
    console.log(textoEncriptado);
    var txtEncriptado = document.getElementById('txtEncriptado');
    txtEncriptado.value = textoEncriptado;
}
function Copiar()
{
    var txtEncriptado = document.getElementById('txtEncriptado');
    var txtextoOriginal = document.getElementById('txtextoOriginal');
    // Seleccionar el texto del elemento
    txtEncriptado.select();
    txtEncriptado.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto al portapapeles
    document.execCommand("copy");
    txtextoOriginal.value="";

}