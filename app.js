function encriptarTexto(){
    let inputText = document.getElementById('inputText').value;

        if (inputText.trim()!==""){
            //Si la caja no está vacía, al presionar el botón de Encriptar
            //se ocultará la imagen de area3 y mostrará el botón de Copiar y el texto encriptado
            document.getElementById('copiarBtn').style.display = "inline-block";
            document.getElementById('textEncriptado').style.display = "block";
            document.getElementById("img").style.display="none";
            document.getElementById("texto1").style.display="none";
            document.getElementById("texto2").style.display="none";
       
            document.getElementById('textEncriptado').innerText = encriptar(inputText);
            document.querySelector('#inputText').value = '';
            
        }else{
            //Si no se ha ingresado texto, dejarlo como al principio
            document.getElementById("img").style.display="block";
            document.getElementById("texto1").style.display="block";
            document.getElementById("texto2").style.display="block";
            document.getElementById("copiarBtn").style.display="none";
            document.getElementById("textEncriptado").style.display="none";
        }
    }

function encriptar(texto){
    texto = texto.replace(/e/g, "enter");  //uso de global flag
    texto = texto.replace(/i/g, "imes");   //se reemplaza según las reglas indicadas
    texto = texto.replace(/a/g, "ai");     //el orden es importante
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
 }
 
 function copiarTexto(){
    let textarea = document.createElement('textarea');
    textarea.value = document.getElementById('textEncriptado').innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");             //obsoleto, pero se requiere esta funcionalidad
    document.body.removeChild(textarea);
    alert("texto copiado al portapapeles")
    document.getElementById("textEncriptado").innerText="";  //Borrar despues de copiar
 }

 function desencriptarTexto(){
  
    let inputText = document.getElementById('inputText').value;

        if (inputText.trim()!==""){
            //Si la caja no está vacía, al presionar el botón de Desencriptar
            //se ocultará la imagen de area3 y mostrará el botón de Copiar y el texto desencriptado
            document.getElementById('copiarBtn').style.display = "inline-block";
            document.getElementById('textEncriptado').style.display = "block";
            document.getElementById("img").style.display="none";
            document.getElementById("texto1").style.display="none";
            document.getElementById("texto2").style.display="none";
       
            document.getElementById('textEncriptado').innerText = desencriptar(inputText);
            document.querySelector('#inputText').value = '';
            
        }else{
            //Si no se ha ingresado texto, dejarlo como al principio
            document.getElementById("img").style.display="block";
            document.getElementById("texto1").style.display="block";
            document.getElementById("texto2").style.display="block";
            document.getElementById("copiarBtn").style.display="none";
            document.getElementById("textEncriptado").style.display="none";
        }
}

 function desencriptar(texto){
    texto = texto.replace(/ufat/g, "u");    //se revierte el orden
    texto = texto.replace(/ober/g, "o");    //para el desencriptado
    texto = texto.replace(/ai/g, "a");          
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/enter/g, "e");
    return texto;
 }

 function convertirTexto(){
    let input = document.getElementById('inputText');
    let texto = input.value;

    texto = texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    input.value = texto;
 }