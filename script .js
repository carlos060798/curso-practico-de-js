

const  form= document.querySelector('#form'); 
const  input1= document.querySelector('#calculo1');
const  input2= document.querySelector('#calculo2');
const  button=document.querySelector('#btn');
const  resultado=document.querySelector('#resultado');



//eventos paraescucha eventos  en js con la funcion addEventListener 

//button.addEventListener('click', btnonclick) 



// manejo de eventos en un formulario
form.addEventListener('submit', btnonclick) 


//event.preventDefault(); se usa para que no se recarge la pagina del formulario

//funcion de sumar numeros de inputs
function btnonclick(event){
  console.log({event})
  event.preventDefault();
  const suma= parseInt (input1.value) + parseInt (input2.value);
   resultado.innerText = "la suma da" + suma;
}






























// querySelector se hace seleccion por  el tipo de etiqueta
 //const h1=document.querySelector("h1");
 //const p=document.querySelector(".parrafo");
// const parafoid=document.querySelector("#parafoid");
 //const input=document.querySelector("input");
 

//console.log(input.value);

// console.log(
    //{
    // h1,
     //p,
  //   parafoid,
//     input


// }
 //)

 // propiedad innerText permite modificar los elementos de html desde js
//h1.innerText="innerHTML me cambio desde js"
//para vr propiedades de los elemento html
//console.log(h1.getAttribute('class')) 

//para modificar los atributos de html
//h1.setAttribute('class','titulo') 


// asignar el valor del input desde js
//input.value="hola pa"

//crea elemtos de html desde js y los muesta en el docuemnto


//const  img=  document.createElement("img");


//console.log()

///parafoid.append(img)