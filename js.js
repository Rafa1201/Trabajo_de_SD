let numx;
let numa;
let numc;
let modulo;
let num_aleatorios;
let numero_a;
let numero_x;


function guardar(){

    numx = Number(document.getElementById("valx").value);

    numa = Number(document.getElementById("vala").value);

    numc = Number(document.getElementById("valc").value);

    modulo = Number(document.getElementById("modulo").value);

    if(numx < 0 || numa < 0 || numc < 0){
        
        alert('LOS NÚMEROS INGRESADOS NO CUMPLEN CON LA CONDICIÓN');
            document.getElementById("valx").value = "";
            document.getElementById("vala").value = "";
            document.getElementById("valc").value = "";
            document.getElementById("modulo").value = "";

    }
    if(modulo < numa || modulo < numc || modulo < numx){
        alert('EL MODULO DEBE SER MAYOR QUE LOS VALORES ANTERIORES');
            document.getElementById("valx").value = "";
            document.getElementById("vala").value = "";
            document.getElementById("valc").value = "";
            document.getElementById("modulo").value = "";
    }
}

function calculo_1(){

    guardar();

    numero_a = numa*numx+numc;
    numero_x = numero_a%modulo;
    num_aleatorios = numero_x/modulo;
    
        console.log(numx);
        console.log(numa);
        console.log(numc);
        console.log(modulo);
        console.log(" ");
        console.log(numero_x);
        console.log(numero_a);
        console.log(num_aleatorios);
        console.log(" ");

        document.getElementById("resul_a").innerHTML = `${numero_a}`;
        document.getElementById("resul_x").innerHTML = `${numero_x}`;
        document.getElementById("aleatorio").innerHTML = `${num_aleatorios}`;

}

function generar(){
    
    calculo_1();

        fin = modulo;
        fin = fin - 1;

        for(let i = 3; i <= fin; i++) {
    
            numero_a = numa*numero_x+numc; 
            numero_x = numero_a%modulo;
            num_aleatorios = numero_x/modulo;

            console.log(numero_x);
            console.log(numero_a);
            console.log(num_aleatorios);
            console.log(" ");    
            console.log(`iteración ${i}`);

           let x_nuevo = document.createElement("label");
           x_nuevo.innerHTML = `${numero_x}`;
           let br = document.createElement("br");

           document.getElementById("resul_ale").appendChild(x_nuevo);
           document.getElementById("resul_ale").appendChild(br);
            
    }

    console.log("FIN DE LA INTERACCIÓN");
}


function promedio(){

}

function frecuencia(){
    
}

function chi(){
    
}

function poisson(){
    
}

function kolmo(){

}
