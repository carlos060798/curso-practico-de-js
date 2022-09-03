/////////// juego de piedra papel o  tijera
let op1 = "piedra"; 
let op2 = "papel";
let op3 = "tijera"; 



let user = "papel";
let play = "piedra";

if (user == op1 && play == op2){
    console.log("gana maquina")
}  else if (user == op1 && play ==op1  ){
    console.log("empate")
}   else if (user == op1 && play == op3 ){
    console.log("gana usuario")
}   else if (user == op2 && play == op1 ){
    console.log("gana usuario")
}   else if (user == op2 && play == op2){
    console.log("gana empate")
}   else if (user == op2 && play ==op3 ){
    console.log("gana maquina")
}   else if (user == op3 && play == op1 ){
    console.log("gana maquina")
}   else if (user == op3 && play == op2 ){
    console.log("gana usuario")
}    else if (user == op3 && play == op3){
    console.log("empate")
} else{
    console.log("fin del fuego")
}



for (let i = 0 ; i < 5 ; i++){
    console.log("el valor de i es = " + i);
} 


// ejemplo de la funcion  promt
let respuesta;   
while (respuesta != "4"){
    let pregunta = prompt("cuanto es 2+2")
     respuesta = pregunta;
}