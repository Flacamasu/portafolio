"use strict";

const imagenes = document.querySelectorAll(".invisible");
const footer = document.querySelectorAll(".invisible__temp");

const home = document.querySelector(".alVerHome");

const sobre_mi = document.querySelector(".alVerSobre");
const sobre_mi_tec = document.querySelector(".sobremi__contenido__tecnologias")

const proyectos = document.querySelector(".alVerProyectos");
const proyectos_img = document.querySelector(".proyectos__contenido__imagenes")


const maquinaEscribir = (text = '',tiempo = 200, etiqueta = '') => { //el efecto de maquina de escribir
  let arrayCaracteres = text.split('');
  etiqueta.innerHTML = '';
  let cont = 0;
  let escribir = setInterval(function(){
      if (arrayCaracteres[cont] === "<" && arrayCaracteres[cont+1] === "b" && arrayCaracteres[cont+2] === "r" && arrayCaracteres[cont+3] === ">") { //cuando ve un <br>
      etiqueta.innerHTML += "<br>";
      cont += 4;
      } else {
      etiqueta.innerHTML += arrayCaracteres[cont];
      cont++;
    }
    if (cont === arrayCaracteres.length) {
      clearInterval(escribir);
    }
  }, tiempo);
}

setTimeout(function(){ //aqui se muestran las barras del footer
    footer.forEach((elemento) => {
        elemento.style.opacity=1;
        elemento.classList.remove="invisible__temp";
    });
},600);

const cargarImagen = (entradas) => { //muestra la imagen de home
    entradas.forEach((entrada) => {
    
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }
        
    })
    
};

const cargarSeccionHome = (seccion) => { //carga cuando home es visible
    seccion.forEach((entrada) => {
      if(entrada.isIntersecting){
        entrada.target.innerHTML = `<p class="maquina__on saludoDescripcion " > 
                                        <span id="saludo-maquina">¡Hola!</span> 
                                        <span id="descripcion-maquina"></span>
                                    </p>`
        const saludo = document.getElementById('saludo-maquina')
        const descripcion = document.getElementById('descripcion-maquina')
        maquinaEscribir(saludo.innerHTML,100,saludo);

        setTimeout(function(){
        maquinaEscribir("<br><br>Estoy especializado en el desarrollo de aplicaciones web y móviles. A lo largo de mi carrera he trabajado en variedad de proyectos, utilizando una amplia gama de tecnologías y lenguajes de programación.",17, descripcion); 
        },1000)
        observadorSeccionHome.unobserve(entrada.target);
      }
    });
};

const cargarSeccionSobre = (seccion) => { //carga cuando Sobre mi es visible
    seccion.forEach((entrada) => {
      if(entrada.isIntersecting){
        entrada.target.innerHTML = `Mi nombre es Luis Araya, soy un apasionado por el mundo de la tecnologia, especialmente por el área del desarrollo de software.<br><br>Me gusta ser proactivo y el trabajar en equipo. Disfruto de aprender cosas nuevas cada día y afrontar nuevos desafios. Mis estudios los realicé en la universidad Andrés Bello en donde aprendi sobre como afrontar diferentes adversidades y el ser autodidacta al buscar soluciones.<br><br>Entre las tecnologias que manejo, están:`
        maquinaEscribir(entrada.target.innerHTML, 14, entrada.target);
        
        
        observadorSeccionSobre.unobserve(entrada.target);
        
      }
    });
};
  
const cargarSeccionProyectos = (seccion) => {
  seccion.forEach((entrada) => {
    if(entrada.isIntersecting){
      entrada.target.innerHTML = `A lo largo de mi tiempo en la universidad he trabajado en variedad de proyectos, entre los que están:`
      maquinaEscribir(entrada.target.innerHTML, 14, entrada.target);
      
      proyectos_img.classList.add('visible');
      observadorSeccionProyectos.unobserve(entrada.target);
      
    }
  });
};



//Aqui estan los observadores y ejecuta evento

const observadorImagenes = new IntersectionObserver(cargarImagen, {
    root:null,
    rootMargin: '0px',
    threshold: 0.5
});
const observadorSeccionHome = new IntersectionObserver(cargarSeccionHome, {
    root:null,
    rootMargin: '0px',
    threshold: 0
});
const observadorSeccionSobre = new IntersectionObserver(cargarSeccionSobre, {
    root:null,
    rootMargin: '0px',
    threshold: 0.1
});
const observadorSeccionProyectos = new IntersectionObserver(cargarSeccionProyectos, {
  root:null,
  rootMargin: '0px',
  threshold: 0.1
});


observadorSeccionHome.observe(home); //cuando se ve la sección home
observadorSeccionProyectos.observe(proyectos); 
observadorSeccionSobre.observe(sobre_mi); 
imagenes.forEach(imagenes =>{ // las imagenes de la seccion home
  observadorImagenes.observe(imagenes);
})


