 
 //Funcion calculadora, donde se engloba todo el proyecto usando el prototipo Modelo.
 var calculadora = (function(){

//Declaracion de las variables utilizadas en el programa

    var display = document.getElementById("display"); //Toma el valor del id display, el cual representa la pantalla de la computadora
    var punto = false;
    var negativo = false;
    var secuencia = true;
    var operacion,limite,subcadena;
    var numero1 = 0, numero2 = 0, resultado=0;

//area de funciones del programa
//funciones que corresponden a los eventos click de cada imagen del html 
//existen dos funciones por cada imagen, la funcion down, para cunado se oprime, y la opcion up que representa cuadno se deja de oprimir la imgane.

    function OnDown(){
        document.getElementById('on').style=" width: 20%;"; //modifica el damaño del boton
        display.innerHTML = "0"; //regresa el valor a 0 del display
         punto=false;   // regresa a false el valor que se utiliza para verificar la existencia del punto decimal
        negativo=false; //regresa a false el valor que se utiliza para verificar si un numero es negativo o positivo
        secuencia=false; //regresa a false el valor que se utiliza para guardar el ultimo valor y la ultima operacion, para una operacion en secuencia 
        numero1=0; //devuelvo los valores por default
        numero2=0;
        setTimeout(OnUp,100);
    };

//Las funciones UP devuelver el valor original a la imgen     
    function OnUp(){
        document.getElementById('on').style=" width: 22%;";
    };

// Inicio de las funciones aritmeticas con transpaso de parametros
    function suma (num1,num2){
        resultado = num1 + num2;
        limite = resultado.toString();
        if (limite.length > 8){          //estos if sirven para que los digitos no sobre pasen el valor de 8 digitos por numero mostrado en el display

            subcadena = limite.substring(0,7);
            display.innerHTM = subcadena;
        }else{
           subcadena = limite;
        }
        
        display.innerHTML= subcadena;
    }

    function resta (num1,num2){
        resultado = num1 - num2;
        limite = resultado.toString()
        if (limite.length > 8){              //estos if sirven para que los digitos no sobre pasen el valor de 8 digitos por numero mostrado en el display

            subcadena = limite.substring(0,7);
            display.innerHTM = subcadena;
        }else{
           subcadena = limite;
        }
        
        display.innerHTML= subcadena;
    }

    function division (num1,num2){
        resultado = num1 / num2;
        limite = resultado.toString()
        if (limite.length > 8){                      //estos if sirven para que los digitos no sobre pasen el valor de 8 digitos por numero mostrado en el display

            subcadena = limite.substring(0,8);
            display.innerHTM = subcadena;
        }else{
           subcadena = limite;
        }
        
        display.innerHTML= subcadena;
    }

    function multiplicacion (num1,num2){
        resultado = num1 * num2;
        limite = resultado.toString()
        if (limite.length > 8){                 //estos if sirven para que los digitos no sobre pasen el valor de 8 digitos por numero mostrado en el display

            subcadena = limite.substring(0,7);
            display.innerHTM = subcadena;
        }else{
           subcadena = limite;
        }
        
        display.innerHTML= subcadena;
    }
//final de las funciones aritmeticas
//inicio de las funciones por tecla 

    function signDown(){
        document.getElementById('sign').style=" width: 20%;";  //Funcion que modifica el signo a la cantidad del display 
        
        if(negativo==false && display.innerHTML!= 0){
            display.innerHTML = "-"+ display.innerHTML;
            negativo=true;   
        }else if(negativo==true){
            len = display.innerHTML.length;
            display.innerHTML = display.innerHTML.substring(1);
            negativo=false;
        }
        setTimeout(signUp,100);
    };

    function signUp(){
            document.getElementById('sign').style=" width: 22%;";
    };

    function raizDown(){                                            //Funcion que cambia el tamaño de la imagen raiz cuadrada
        document.getElementById('raiz').style=" width: 20%;";
        setTimeout(raizUp,100);
    };

    function raizUp(){
            document.getElementById('raiz').style=" width: 22%;";
    };

    function divididoDown(){                                            //funcion que activa la operacion de division 
        document.getElementById('dividido').style=" width: 20%;";
        numero1= Number(display.innerHTML);
        display.innerHTML = "";
        operacion = "division";
        setTimeout(divididoUp,100);
        punto=false;
        negativo=false;
        secuencia=false;
    };

    function divididoUp(){
            document.getElementById('dividido').style=" width: 22%;";
    };

    function sieteDown(){
                                                                        //funcin del numero siete, agrega su valor al display 
        document.getElementById('7').style=" width: 20%;";
        if (display.innerHTML == "0"){
           
                display.innerHTML = "7";
                console.log(display.innerHTML.length)
           
            
        }else if(display.innerHTML.length < 8){
            display.innerHTML = display.innerHTML + "7";
        }

        setTimeout(sieteUp,100);
    };

    function sieteUp(){
            document.getElementById('7').style=" width: 22%;";
    };

    function seisDown(){                                            //funcin del numero seis, agrega su valor al display 
        document.getElementById('6').style=" width: 20%;";
        if (display.innerHTML == "0"){
            display.innerHTML = "6";
        }else if(display.innerHTML.length < 8){
            display.innerHTML = display.innerHTML + "6";
        }
        setTimeout(seisUp,100);
    };

    function seisUp(){
            document.getElementById('6').style=" width: 22%;";
    };

    function ochoDown(){                                             //funcin del numero ocho, agrega su valor al display 
        document.getElementById('8').style=" width: 20%;";
        if (display.innerHTML == "0"){
            display.innerHTML = "8";
        }else if(display.innerHTML.length < 8){
            display.innerHTML = display.innerHTML + "8";
        }
        setTimeout(ochoUp,100);
    };

    function ochoUp(){
            document.getElementById('8').style=" width: 22%;";
    };

    function nueveDown(){                                           //funcin del numero nueve, agrega su valor al display 
        document.getElementById('9').style=" width: 20%;";
        if (display.innerHTML == "0"){
            display.innerHTML = "9";
        }else if(display.innerHTML.length < 8){
            display.innerHTML = display.innerHTML + "9";
        }
        setTimeout(nueveUp,100);
    };

    function nueveUp(){
            document.getElementById('9').style=" width: 22%;";
    };

    function porDown(){                                             //Funcion para efector la operacion Multiplicacion 
        document.getElementById('por').style=" width: 20%;";
        numero1= Number(display.innerHTML);
        display.innerHTML = "";
        operacion = "multiplicacion";
        setTimeout(porUp,100);
        punto=false;
        negativo=false;
        secuencia=false;
    };

    function porUp(){
            document.getElementById('por').style=" width: 22%;";
    };
//funcin del numero cuatro, agrega su valor al display 
    function cuatroDown(){
        document.getElementById('4').style=" width: 20%;";
        if (display.innerHTML == "0"){
            display.innerHTML = "4";
        }else if(display.innerHTML.length < 8){
            display.innerHTML = display.innerHTML + "4";
        }
        setTimeout(cuatroUp,100);
    };

    function cuatroUp(){
            document.getElementById('4').style=" width: 22%;";
    };
    //funcin del numero cinco, agrega su valor al display 
    function cincoDown(){
        document.getElementById('5').style=" width: 20%;";
        if (display.innerHTML == "0"){
            display.innerHTML = "5";
        }else if(display.innerHTML.length < 8){
            display.innerHTML = display.innerHTML + "5";
        }
        setTimeout(cincoUp,100);
    };

    function cincoUp(){
            document.getElementById('5').style=" width: 22%;";
    };
//Funcion que agrega la operacion restar 
    function menosDown(){
        document.getElementById('menos').style=" width: 20%;";
        setTimeout(menosUp,100);
        numero1= Number(display.innerHTML);
        display.innerHTML = "";
        operacion = "resta";
        punto=false;
        negativo=false;
        secuencia=false;
    };

    function menosUp(){
            document.getElementById('menos').style=" width: 22%;";
    };
//funcin del numero uno, agrega su valor al display 
    function unoDown(){
        document.getElementById('1').style=" width: 27%;";
        if (display.innerHTML == "0"){
            display.innerHTML = "1";
        }else if(display.innerHTML.length < 8){
            display.innerHTML = display.innerHTML + "1";
        }
        setTimeout(unoUp,100);
    };

    function unoUp(){
            document.getElementById('1').style=" width: 30%;";
    };
//funcin del numero dos, agrega su valor al display 
    function dosDown(){
        document.getElementById('2').style=" width: 27%;";
        if (display.innerHTML == "0"){
            display.innerHTML = "2";
        }else if(display.innerHTML.length < 8){
            display.innerHTML = display.innerHTML + "2";
        }
        setTimeout(dosUp,100);
    };

    function dosUp(){
            document.getElementById('2').style=" width: 30%;";
    };
//funcin del numero tres, agrega su valor al display 
    function tresDown(){
        document.getElementById('3').style=" width: 27%;";
        if (display.innerHTML == "0"){
            display.innerHTML = "3";
        }else if(display.innerHTML.length < 8){
            display.innerHTML = display.innerHTML + "3";
        }
        setTimeout(tresUp,100);
    };

    function tresUp(){
            document.getElementById('3').style=" width: 30%;";
    };
//funcin del numero cero, agrega su valor al display 
    function ceroDown(){
        document.getElementById('0').style=" width: 27%;";
        if (display.innerHTML == "0"){
            display.innerHTML = "0";
        }else if(display.innerHTML.length < 8){
            display.innerHTML = display.innerHTML + "0";
        }
        setTimeout(ceroUp,100);
    };

    function ceroUp(){
            document.getElementById('0').style=" width: 30%;";
    };
//Funcion igual, llama a la funcion correspondiende a cada operacion y agrega el segundo numero a dicha operacion 
    function igualDown(){
        document.getElementById('igual').style=" width: 27%;";
        
        switch(operacion){
            case "suma":
            if(secuencia == false){
                numero2 = Number(display.innerHTML);
                secuencia = true;
            }else{
                numero1 = Number(display.innerHTML);
            }
            
            suma(numero1,numero2);
            break;
            case "resta":
            if(secuencia == false){
                numero2 = Number(display.innerHTML);
                secuencia = true;
            }else{
                numero1 = Number(display.innerHTML);
            }
            
            resta(numero1,numero2);
            break;
            case "multiplicacion":
            if(secuencia == false){
                numero2 = Number(display.innerHTML);
                secuencia = true;
            }else{
                numero1 = Number(display.innerHTML);
            }
            
            multiplicacion(numero1,numero2);
            break;
            case "division":
            if(secuencia == false){
                numero2 = Number(display.innerHTML);
                secuencia = true;
            }else{
                numero1 = Number(display.innerHTML);
            }
            
            division(numero1,numero2);
            break;

        }
        setTimeout(igualUp,100);
    };

    function igualUp(){
            document.getElementById('igual').style=" width: 30%;";
    };
//Funcion mas
    function masDown(){
        document.getElementById('mas').style=" height: 90%;";
       
        numero1= Number(display.innerHTML);
        display.innerHTML = "";
        operacion = "suma";
        punto=false;
        negativo=false;
        secuencia=false;
        
        setTimeout(masUp,100);
    };

    function masUp(){
            document.getElementById('mas').style="height: 100%;";
    };

    function puntoDown(){
        document.getElementById('punto').style=" width: 27%;";
        if(punto==false && display.innerHTML.length < 8){
            display.innerHTML = display.innerHTML + ".";
            punto= true;
        }
        setTimeout(puntoUp,100);
    };

    function puntoUp(){
            document.getElementById('punto').style=" width: 30%;";
    };

//Eventos que corresponden a los clicks de cada imagen del HTML
    document.getElementById('on').onclick = OnDown;
    document.getElementById('sign').onclick = signDown;
    document.getElementById('raiz').onclick = raizDown;
    document.getElementById('dividido').onclick = divididoDown;
    document.getElementById('7').onclick = sieteDown;
    document.getElementById('8').onclick = ochoDown;
    document.getElementById('9').onclick = nueveDown;
    document.getElementById('por').onclick = porDown;
    document.getElementById('4').onclick = cuatroDown;
    document.getElementById('5').onclick = cincoDown;
    document.getElementById('6').onclick = seisDown;
    document.getElementById('menos').onclick = menosDown;
    document.getElementById('1').onclick = unoDown;
    document.getElementById('2').onclick = dosDown;
    document.getElementById('3').onclick = tresDown;
    document.getElementById('0').onclick = ceroDown;
    document.getElementById('punto').onclick = puntoDown;
    document.getElementById('igual').onclick = igualDown;
    document.getElementById('mas').onclick = masDown;

})(); 

 //Final de la funcion modul calculadora