const cotizarSeguro=()=>{
    let marca=document.querySelector("#marca").value;
    let ano=document.querySelector("#año").value;
    let basico=document.querySelector("#basico");
    let completo=document.querySelector("#completo");

    let divResumen=document.querySelector("#resumen");
    let divResultado=document.querySelector("#resultado");

    let plan="";

    if(basico.checked){
        plan="basico";
    }else if(completo.checked){
        plan="completo";
    }


    if(marca ==='' ||
        ano=== '' ||
        plan=== ''){
        mostrarError("#error","Falta seleccionar opciones");
    return;
}
let cotizacion={marca, ano, plan};
document.querySelector("#msj").getElementsByClassName.display="none";

setTimeout(()=>{
    divResumen.innerHTML= `<ul> <li>Marca: ${marca}</li>  <li>Plan: ${plan}</li> <li>Año del auto: ${ano}</li></ul>`;

    let cotizacionFinal=cotizar(cotizacion);

    divResultado.style.display="block";
    divResultado.className="divResultado";
    divResultado.innerHTML=`<p class="textoCotizacion">$ ${cotizacionFinal} </p>`;

}, 2000);

}

const cotizar=(cotizacion)=> {
    const {marca, plan, ano}  = cotizacion;



    let resultado=2000;

    const diferenciaAno=diferencia(ano);

    // console.log("asd = "+diferenciaAno);

    resultado-=((diferenciaAno*3)*resultado)/100;

    // console.log("asd = "+resultado);

    resultado=calcularMarca(marca)*resultado;


    // console.log("asd = "+resultado);

    const incrementoPlan=obtenerPlan(plan);

    resultado=parseFloat(incrementoPlan*resultado).toFixed(2);

    return resultado;

}



const obtenerPlan=(plan)=>{
    return (plan==='basico')?1.20:1.50;
}

const calcularMarca=marca=>{

console.log("qwe="+marca);



    let incremento;

    switch(marca){

        case 'alta gama': incremento=1.30;
        break;
        case 'intermedio': incremento=1.15;
        break;
        case 'economico': incremento=1.05;
        break;
        
    }

    return incremento;
}

const diferencia=(ano)=>{
    return new Date().getFullYear()-ano;
    
}

const mostrarError=(elemento, mensaje)=>{
    divError = document.querySelector(elemento); 
    divError.innerHTML = `<p class="alerta-error">${mensaje}</p>`;
    setTimeout(() => { divError.innerHTML = ''; }, 2000);
} 