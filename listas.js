
// funcion para devolver  el primere elemto de un array
function imprimir(arr){
        console.log(arr[0])
}  
// imprimeir los elementos de la lista uno ´por uno
function imprimir(arr){
    for (let i = 0 ; i< arr.length; i++ ){
        console.log(arr[i])
    }
} 

function imprimir(arr){
    for (let i = 0 ; i< arr.length; i++ ){
        console.log(arr[i])
    }
} 

// funcion que devuelve  imprimido un arreglo objeto por objeto

function imprimironjeto(obj){
    const arr= Object.values(obj);
    for (let i = 0 ; i< arr.length; i++ ){
        console.log(arr[i])
    }
}  

// formas de solucionar un  anidamiento de if en unsolo codnicional  

//  secera una varible objt con las posibles validaciones
const  tipodesuscripcion = {
    free: "solo cursos gratis",
    expert:"cursos copletos un solo usuario",
    expertduo:"cursos completos dos usuarios",
    familia: "cursos para cuatro personas"
} 

// se crea uan funcion que tiene  como para metro un strig que valida dentro del objeto 

 function consegirtipoSuscripcion(suscripcion){
    if (tipodesuscripcion[suscripcion]){
        console.log(tipodesuscripcion[suscripcion])
        return
    }
    console.warn("suscricion no existe")
 }