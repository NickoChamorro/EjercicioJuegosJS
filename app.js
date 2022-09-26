/* ------ FUNCIONES NUMEROS QUINI6 ------ */ 

function mostrarNumerosQuini6(nombre,n1,n2,n3,n4,n5,n6) {
    document.write(`<div class="container">
                        <h1>Bienvenid@ ${nombre}!</h1>
                        <p>Tus números para la jugada de hoy son los siguientes:</p>
                        <p class="num">${n1} - ${n2} - ${n3} - ${n4} - ${n5} - ${n6}</p>
                        <p class="adicional">Si querés volver a elegir oprimí el botón:</p>
                        <button onclick="recargarQuini6()">Probar suerte</button>
                    </div>` );
}

const traeNumeroRandom = () => {
    let encuentraLibre = false;
    let random;
    while (encuentraLibre==false){
        random = Math.round(Math.random()*45);
        encuentraLibre = buscaLibre(random);
    };
    return random;
}

const buscaLibre = random => {
    return existe = random == n1 ? false : 
                random == n2 ? false :
                random == n3 ? false :
                random == n4 ? false :
                random == n5 ? false :
                random == n6 ? false :
                true;      
}

const cargoRandomsQuini6 = () => {
    n1 = traeNumeroRandom();
    n2 = traeNumeroRandom();
    n3 = traeNumeroRandom();
    n4 = traeNumeroRandom();
    n5 = traeNumeroRandom();
    n6 = traeNumeroRandom();
}

const recargarQuini6 = () =>{
    n1=n2=n3=n4=n5=n6=null;
    cargoRandomsQuini6();
    let parrafo  = document.querySelector('.num');
    parrafo.textContent = `${n1} - ${n2} - ${n3} - ${n4} - ${n5} - ${n6}`
};
/* ------ FUNCIONES JUEGO DADOS ------ */

const cargoRandomDados = () => {
    dado1 = Math.floor(Math.random() *6) + 1;
    dado2 = Math.floor(Math.random() *6) + 1;
}; 

const textoResultado = nombre => {
    let resultado = dado1>dado2 ? `${nombre} has ganado! Felicitaciones!` : dado1<dado2 ? "Has perdido. Vuelve a intentarlo." : "Ah sido un empate!"; 
    return resultado
};    

const cargarPantallaDados = nombre => {
    document.write(`<div class="container">
                        <h1>Bienvenid@ ${nombre}!</h1>
                        <div class="columnas">

                            <div class="col1">

                                <p class="num titDado1">${nombre}:  </p>

                                <div class="dado">
                                    <div class="puntos">
                                        <div class="posicion posicion1 active" id="d11"></div>
                                        <div class="posicion posicion2" id="d12"></div>
                                        <div class="posicion posicion3 active" id="d13"></div>
                                        <div class="posicion posicion4 active" id="d14"></div>
                                        <div class="posicion posicion5" id="d15"></div>
                                        <div class="posicion posicion6 active" id="d16"></div>
                                        <div class="posicion posicion7 active" id="d17"></div>
                                        <div class="posicion posicion8" id="d18"></div>
                                        <div class="posicion posicion9 active" id="d19"></div>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="col2">

                                <p class="num titDado2">Computadora:  </p>

                                <div class="dado">
                                    <div class="puntos">
                                        <div class="posicion posicion1 active" id="d21"></div>
                                        <div class="posicion posicion2" id="d22"></div>
                                        <div class="posicion posicion3 active" id="d23"></div>
                                        <div class="posicion posicion4 active" id="d24"></div>
                                        <div class="posicion posicion5" id="d25"></div>
                                        <div class="posicion posicion6 active" id="d26"></div>
                                        <div class="posicion posicion7 active" id="d27"></div>
                                        <div class="posicion posicion8" id="d28"></div>
                                        <div class="posicion posicion9 active" id="d29"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <p class="resultadoDados"> </p>
                        <p class="adicional">Vuelva a probar suerte:</p>
                        <button onclick="TirarDados('${nombre}')">Tirar dados</button>
                    </div>` );  
};    

const TirarDados = nombre =>{

    /* Agregamos la animacion de dados */
    const dados = document.getElementsByClassName('dado');
    for (var i = 0; i < dados.length; i++) {
        dados[i].classList.add('shake');
    }    
    setTimeout(() =>{
        for (var i = 0; i < dados.length; i++) {
            dados[i].classList.remove('shake');
        };

        /* Limpiamos dados */
        const posiciones = document.getElementsByClassName('posicion');
        for (var i = 0; i < posiciones.length; i++) {
            if (posiciones[i].classList.contains('active'))
                posiciones[i].classList.remove('active');
        }

        /* Volvemos a tirar */
        cargoRandomDados();

        /* Cargamos los valores a modificar en pantalla */
        let tituloDado1  = document.querySelector('.titDado1');
        tituloDado1.textContent = `${nombre}: ${dado1}`;

        let tituloDado2  = document.querySelector('.titDado2');
        tituloDado2.textContent = `Computadora: ${dado2}`;

        let resultadoDados  = document.querySelector('.resultadoDados');
        let resultado = textoResultado(nombre);
        resultadoDados.textContent = `${resultado}`;

        switch (dado1) {
            case 1:
                document.querySelector('#d15').classList.add('active');
                break;
            case 2:
                document.querySelector('#d13').classList.add('active');
                document.querySelector('#d17').classList.add('active');
                break;
            case 3:
                document.querySelector('#d13').classList.add('active');
                document.querySelector('#d15').classList.add('active');
                document.querySelector('#d17').classList.add('active');
                break;
            case 4:
                document.querySelector('#d11').classList.add('active');
                document.querySelector('#d13').classList.add('active');
                document.querySelector('#d17').classList.add('active');
                document.querySelector('#d19').classList.add('active');
                break;
            case 5:
                document.querySelector('#d11').classList.add('active');
                document.querySelector('#d13').classList.add('active');
                document.querySelector('#d15').classList.add('active');
                document.querySelector('#d17').classList.add('active');
                document.querySelector('#d19').classList.add('active');
                break;
            case 6:
                document.querySelector('#d11').classList.add('active');
                document.querySelector('#d13').classList.add('active');
                document.querySelector('#d14').classList.add('active');
                document.querySelector('#d16').classList.add('active');
                document.querySelector('#d17').classList.add('active');
                document.querySelector('#d19').classList.add('active');
                break;  
        };
        switch (dado2) {
            case 1:
                document.querySelector('#d25').classList.add('active');
                break;
            case 2:
                document.querySelector('#d23').classList.add('active');
                document.querySelector('#d27').classList.add('active');
                break;
            case 3:
                document.querySelector('#d23').classList.add('active');
                document.querySelector('#d25').classList.add('active');
                document.querySelector('#d27').classList.add('active');
                break;
            case 4:
                document.querySelector('#d21').classList.add('active');
                document.querySelector('#d23').classList.add('active');
                document.querySelector('#d27').classList.add('active');
                document.querySelector('#d29').classList.add('active');
                break;
            case 5:
                document.querySelector('#d21').classList.add('active');
                document.querySelector('#d23').classList.add('active');
                document.querySelector('#d25').classList.add('active');
                document.querySelector('#d27').classList.add('active');
                document.querySelector('#d29').classList.add('active');
                break;
            case 6:
                document.querySelector('#d21').classList.add('active');
                document.querySelector('#d23').classList.add('active');
                document.querySelector('#d24').classList.add('active');
                document.querySelector('#d26').classList.add('active');
                document.querySelector('#d27').classList.add('active');
                document.querySelector('#d29').classList.add('active');
                break;  
        };

    },1000);

}

/* ------- Piedra, papel o tijera ------- */

const cargarPantallaPiedraPapelTijera = nombre => {
    document.write(`<div class="container">
                        <h1>Bienvenid@ ${nombre}!</h1>
                        <div class="columnas">

                            <div class="columna1">

                                <p class="num">${nombre}:</p>

                                <div class="cajaPPT">
                                    <img class="imagenJugador" src="./img/Piedra.png"  alt="Piedra, papel o Tijeras" width="100%">
                                </div>
                            </div>
                    
                            <div class="columna2">

                                <p class="num">Computadora:</p>

                                <div class="cajaPPT">
                                    <img class="imagenPC" src="./img/Tijera.png" alt="Piedra, papel o Tijeras" width="100%">
                                </div>
                            </div>

                        </div>
                        <p class="resultadoPPT"> </p>
                        <div class="columna1">
                            <p class="adicional">Seleccione piedra, papel o tijera:</p>
                            <div class="seleccion">
                                <div class="cajaPiedra">
                                    <img class="imagenPiedra" src="./img/Piedra.png" alt="Piedra" width="100%">
                                </div>
                                <div class="cajaPapel">    
                                    <img class="imagenPapel" src="./img/Papel.png" alt="Papel" width="100%">
                                </div>
                                <div class="cajaTijera">    
                                    <img class="imagenTijera" src="./img/Tijera.png" alt="Tijera" width="100%">
                                </div>    
                            </div>
                        </div>
                        
                    </div>` );  
};    

const calculoResultadoPPT = (usuarioOpcion, computadoraOpcion) => {
    if (usuarioOpcion === computadoraOpcion){
        return EMPATE;
    }
    if (usuarioOpcion === PIEDRA){
        if (computadoraOpcion === PAPEL) return PIERDE;
        if (computadoraOpcion === TIJERA) return GANA;
    } else if (usuarioOpcion === PAPEL) {
        if (computadoraOpcion === PIEDRA) return GANA;
        if (computadoraOpcion === TIJERA) return PIERDE;
    } else if (usuarioOpcion === TIJERA) {
        if (computadoraOpcion === PIEDRA) return PIERDE;
        if (computadoraOpcion === PAPEL) return GANA;
    }
}

const modificarImagenComputadora = computadoraOpcion => {
    let imagenComputadora = document.querySelector('.imagenPC');
    if (computadoraOpcion === PIEDRA) imagenComputadora.setAttribute("src","./img/Piedra.png");
    if (computadoraOpcion === PAPEL)  imagenComputadora.setAttribute("src","./img/Papel.png");
    if (computadoraOpcion === TIJERA) imagenComputadora.setAttribute("src","./img/Tijera.png");
}

const cargarFuncionalidadesPPT = (nombre) =>{
    let piedraBoton = document.querySelector('.imagenPiedra');  
    let papelBoton  = document.querySelector('.imagenPapel');  
    let tijeraBoton = document.querySelector('.imagenTijera');  
    let imagenJugador = document.querySelector('.imagenJugador');

    piedraBoton.addEventListener("click",()=>{
        imagenJugador.setAttribute("src","./img/Piedra.png");
        playPiedraPapelTijera(PIEDRA);
    });
    papelBoton.addEventListener("click",()=>{
        imagenJugador.setAttribute("src","./img/Papel.png");
        playPiedraPapelTijera(PAPEL);
    });
    tijeraBoton.addEventListener("click",()=>{
        imagenJugador.setAttribute("src","./img/Tijera.png");
        playPiedraPapelTijera(TIJERA);
    });

    const playPiedraPapelTijera = usuarioOpcion =>{

        const elementoResultado = document.querySelector('.resultadoPPT');
        elementoResultado.textContent = "Eligiendo...";

        const intervalo = setInterval(()=>{
            let computadoraOpcion = Math.floor(Math.random() * 3);
            modificarImagenComputadora(computadoraOpcion);
        },200);

        setTimeout(() =>{
            clearInterval(intervalo);
            let computadoraOpcion = Math.floor(Math.random() * 3); 
            modificarImagenComputadora(computadoraOpcion);

            let resultado = calculoResultadoPPT(usuarioOpcion, computadoraOpcion);

            switch(resultado){
                case EMPATE:
                    elementoResultado.textContent = "Ah sido un empate!";
                    break;
                case GANA:
                    elementoResultado.textContent = `${nombre} has ganado! Felicitaciones!`;
                    break;
                case PIERDE:
                    elementoResultado.textContent = "Has perdido. Vuelve a intentarlo.";
                    break;
            };     
        },2000);
    };
};

/* ------- General ------- */
let opcion =  Number(prompt("Elija una opción: \n(1) Números de la suerte Quini6.\n(2) Juego de dados.\n(3) Juego piedra, papel y tijeras."));
let n1=null, n2=null, n3=null, n4=null, n5=null, n6=null, dado1=null, dado2=null, nombre='';
const PIEDRA = 0, PAPEL = 1, TIJERA = 2, EMPATE = 0, GANA = 1, PIERDE = 2;

if (opcion!=1 && opcion!=2 && opcion!=3){ 
    document.write(`<div class="container">  
                    <h1>Opción invalida. Vuelva a ingresar</h1> </div>`);
} else {                             

    let nombre = prompt("Ingrese su nombre");
    const body = document.querySelector('body'); 

    if (opcion==1){
        cargoRandomsQuini6();
        mostrarNumerosQuini6(nombre,n1,n2,n3,n4,n5,n6)
        body.style.background = 'red'; 
        body.style.backgroundImage = 'url(img/SM-quini-6-amuletos-01072020.webp)'; 
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundPosition = 'center center';
        body.style.backgroundAttachment = 'fixed';
    } else if (opcion==2){
        cargarPantallaDados(nombre);
        TirarDados(nombre);
        body.style.backgroundImage = 'none'; 
        body.style.background = 'linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)'; 
    } else {
        cargarPantallaPiedraPapelTijera(nombre);
        cargarFuncionalidadesPPT(nombre);
        body.style.backgroundImage = 'none'; 
        body.style.background = 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)';
    }
}
