const btnConsultaEmpresa = document.getElementById('Empresa');
const btnConsultaPlanes = document.getElementById('Planes');
// const nombre = document.getElementById('nombre');

function consultaEmpresa(){ 
    alert("Gracias por su consulta");

}

function consultaPlanes(nombre){
    alert(`${nombre}, gracias por su consulta`);
}

let evento = 'click'


// console.log(`asd=' ${btnConsultaEmpresa}`);

btnConsultaEmpresa.addEventListener('click', 
    function() {
        consultaEmpresa();
    });


// btnConsultaEmpresa.onclick = consultaEmpresa;

// btnConsultaPlanes.addEventListener('click',consultaPlanes());

btnConsultaPlanes.addEventListener('click',()=>{
    let nombre = document.getElementById('nombre').value;
    consultaPlanes(nombre);
}
)

let nombre = document.getElementById('nombre');

// btnConsultaPlanes.onclick = consultaPlanes(nombre);

function cambiarImagen(color) {
    document.getElementById('fordFocus').src=color;
}

let radioVerde = document.getElementById('verde');
let radioAzul = document.getElementById('azul');

radioVerde.addEventListener('click',()=>{
    cambiarImagen('./multimedia/focusverde.jpg');
});

radioAzul.addEventListener('click',()=>{
    cambiarImagen('./multimedia/focusazul.jpg');
});


// AJAX CON QUERY

function ajax(){


    const http = new XMLHttpRequest();
    const url = 'index.html';
    
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            document.getElementById("response").innerHTML = this.responseText ;

        }
    }

    http.open("GET", url);
    http.send();
    
}

document.getElementById("boton").addEventListener("click", function(){
    ajax();

});


















