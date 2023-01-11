
let counter=0;

function Add(){
    counter++;
    num4.innerHTML=`${counter}`
    console.log(counter)
}
function Substract(){
    if (counter >  0 ){

        counter--;
        num4.innerHTML=`${counter}`
    }
    else{
        counter=0;
    }
}

// WHATSAPP

function Wpp(){
    const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter}%20unidades%20de%20${nombreProd} `;
    window.open(URL, "_blank");
}
