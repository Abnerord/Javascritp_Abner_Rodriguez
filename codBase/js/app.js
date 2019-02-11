 var calculadora = (function(){

    function OnDown(){
        document.getElementById('on').style=" width: 20%;";
        setTimeout(OnUp,100);
    };

    function OnUp(){
            document.getElementById('on').style=" width: 22%;";
    };

    function signDown(){
        document.getElementById('sign').style=" width: 20%;";
        setTimeout(signUp,100);
    };

    function signUp(){
            document.getElementById('sign').style=" width: 22%;";
    };

    function raizDown(){
        document.getElementById('raiz').style=" width: 20%;";
        setTimeout(raizUp,100);
    };

    function raizUp(){
            document.getElementById('raiz').style=" width: 22%;";
    };

    function divididoDown(){
        document.getElementById('dividido').style=" width: 20%;";
        setTimeout(divididoUp,100);
    };

    function divididoUp(){
            document.getElementById('dividido').style=" width: 22%;";
    };

    function sieteDown(){
        document.getElementById('7').style=" width: 20%;";
        setTimeout(sieteUp,100);
    };

    function sieteUp(){
            document.getElementById('7').style=" width: 22%;";
    };

    function seisDown(){
        document.getElementById('6').style=" width: 20%;";
        setTimeout(seisUp,100);
    };

    function seisUp(){
            document.getElementById('6').style=" width: 22%;";
    };

    function ochoDown(){
        document.getElementById('8').style=" width: 20%;";
        setTimeout(ochoUp,100);
    };

    function ochoUp(){
            document.getElementById('8').style=" width: 22%;";
    };

    function nueveDown(){
        document.getElementById('9').style=" width: 20%;";
        setTimeout(nueveUp,100);
    };

    function nueveUp(){
            document.getElementById('9').style=" width: 22%;";
    };

    function porDown(){
        document.getElementById('por').style=" width: 20%;";
        setTimeout(porUp,100);
    };

    function porUp(){
            document.getElementById('por').style=" width: 22%;";
    };

    function cuatroDown(){
        document.getElementById('4').style=" width: 20%;";
        setTimeout(cuatroUp,100);
    };

    function cuatroUp(){
            document.getElementById('4').style=" width: 22%;";
    };

    function cincoDown(){
        document.getElementById('5').style=" width: 20%;";
        setTimeout(cincoUp,100);
    };

    function cincoUp(){
            document.getElementById('5').style=" width: 22%;";
    };

    function menosDown(){
        document.getElementById('menos').style=" width: 20%;";
        setTimeout(menosUp,100);
    };

    function menosUp(){
            document.getElementById('menos').style=" width: 22%;";
    };

    function unoDown(){
        document.getElementById('1').style=" width: 27%;";
        setTimeout(unoUp,100);
    };

    function unoUp(){
            document.getElementById('1').style=" width: 30%;";
    };

    function dosDown(){
        document.getElementById('2').style=" width: 27%;";
        setTimeout(dosUp,100);
    };

    function dosUp(){
            document.getElementById('2').style=" width: 30%;";
    };

    function tresDown(){
        document.getElementById('3').style=" width: 27%;";
        setTimeout(tresUp,100);
    };

    function tresUp(){
            document.getElementById('3').style=" width: 30%;";
    };
    function ceroDown(){
        document.getElementById('0').style=" width: 27%;";
        setTimeout(ceroUp,100);
    };

    function ceroUp(){
            document.getElementById('0').style=" width: 30%;";
    };

    function igualDown(){
        document.getElementById('igual').style=" width: 27%;";
        setTimeout(igualUp,100);
    };

    function igualUp(){
            document.getElementById('igual').style=" width: 30%;";
    };

    function masDown(){
        document.getElementById('mas').style=" height: 90%;";
        setTimeout(masUp,100);
    };

    function masUp(){
            document.getElementById('mas').style="height: 100%;";
    };

    function puntoDown(){
        document.getElementById('punto').style=" width: 27%;";
        setTimeout(puntoUp,100);
    };

    function puntoUp(){
            document.getElementById('punto').style=" width: 30%;";
    };


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

 
