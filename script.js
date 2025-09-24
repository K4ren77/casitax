document.addEventListener("DOMContentLoaded", () => {
  const ventanaContainer = document.getElementById("ventanas");

  // Función genérica para asignar la secuencia de fotos a un activador
  function activarSecuencia(triggerSelector, fotos) {
    const trigger = document.querySelector(triggerSelector);

    let fotoActual = 0;
    let fotosAbiertas = [];

    trigger.addEventListener("click", () => {
      fotoActual = 0;
      fotosAbiertas = [];
      abrirFoto(fotoActual);
      bloquearPagina(true);
    });

    function abrirFoto(index) {
      const ventana = document.createElement("div");
      ventana.classList.add("ventana");

      // Imagen
      const img = document.createElement("img");
      img.src = fotos[index];
      img.style.display = "block";

      ventana.appendChild(img);
      ventanaContainer.appendChild(ventana);

      fotosAbiertas.push(ventana);

      // Posición aleatoria
      const offsetX = (Math.random() - 0.5) * 200;
      const offsetY = (Math.random() - 0.5) * 200;

      ventana.style.position = "fixed";
      ventana.style.top = `calc(50% + ${offsetY}px)`;
      ventana.style.left = `calc(50% + ${offsetX}px)`;
      ventana.style.transform = "translate(-50%, -50%)";
      ventana.style.zIndex = 1000 + index;

      img.addEventListener("click", () => {
        if (index < fotos.length - 1) {
          fotoActual++;
          abrirFoto(fotoActual);
        } else {
          cerrarTodas();
        }
      });
    }

    function cerrarTodas() {
      fotosAbiertas.forEach(foto => foto.remove());
      fotosAbiertas = [];
      bloquearPagina(false);
    }
  }

  function bloquearPagina(bloquear) {
    if (bloquear) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  // proceso en cada imagen con sus fotos

  activarSecuencia(".cuadros", [
    "assets/family.jpg",
    "assets/marcha.png",
    "assets/unidad.png",
    "assets/secuestro.png",
    "assets/machete.png",
    "assets/guerra.png",
    "assets/marcha2.png",
    "assets/muerte.png",
  ]);

  activarSecuencia("#paper", [
    "assets/uno.png",
    "assets/unik.png",
    "assets/toma.jpg", 
    "assets/balacera.png",
    "assets/campe.png",
    "assets/comunista.png",
    "assets/eeuu.png",
    "assets/gaitan.png",
    "assets/hippie.png"
   
  ]);

  activarSecuencia ("#pap", [
    "assets/zombie.png",
  ]);


activarSecuencia("#libros", [
    "assets/loca.jpg",
    "assets/libro1.jpg",
    "assets/libro2.jpg",
    "assets/libro3.jpg",
    "assets/libro4.png",
    "assets/libro5.jpg",
    "assets/libro6.jpg",
    "assets/libro7.jpg",
    "assets/mani.jpg",
    "assets/rev.jpg",
    "assets/aguas.png",

  ]);

  activarSecuencia("#cartas", [
    "assets/go.jpg", 
    "assets/col.png",
    "assets/letra.png",
    "assets/seño.png",
    "assets/pazz.png",
    "assets/cedula.png",
    "assets/depie.jpg",
    "assets/depie2.jpg",
    "assets/apa.PNG",


  ]);

   activarSecuencia("#mapa", [
      "assets/vieja.png",
      "assets/soldaditos.png",
      "assets/farc2.jpg",
      "assets/estado.jpg"
  ]);

activarSecuencia("#frai", [
      "assets/gol.png",
  ]);

  activarSecuencia("#espada", [
      "assets/robo.webp",
  ]);

   activarSecuencia("#papa", [
      "assets/paro.jpeg",
  ]);

   activarSecuencia("#banano", [
     "assets/nn.jpg",
      "assets/united.jpg",
      "assets/masacre.jpeg",

  ]);
   
  activarSecuencia("#botas", [
      "assets/botass.jpg",
      "assets/verdad.jpeg",

  ]);

  });




// Función para asignar sonido a un objeto clickeable
function activarSonido(triggerSelector, sonidoRuta) {
  const trigger = document.querySelector(triggerSelector);
  const sonido = new Audio(sonidoRuta);

  trigger.addEventListener("click", () => {
    sonido.currentTime = 0; // Reinicia el audio cada vez que se clickea
    sonido.play();
  });
}

// 🔹 Activar sonido en la imagen de radio
activarSonido("#radio", 
  "assets/pablo.mp3"
);

activarSonido("#gato1", 
  "assets/cat.mp3"
);

activarSonido("#guitarra", 
  "assets/resist.mp3"
 
);

activarSonido("#maquina", 
  "assets/escribirmaquina.mp3"

 );

activarSonido("#ventana", 
  "assets/campo.mp3"
);

activarSonido("#reloj", 
  "assets/tic.mp3"
);

activarSonido("#chee", 
  "assets/chee.mp3"
);

 activarSonido("#boli", 
  "assets/pisba.mp3"
);
 
 activarSonido("#hadas", 
  "assets/polvo.mp3"
);

 activarSonido("#pistol", 
  "assets/rifle.mp3"
);

 activarSonido("#cafe", 
  "assets/aguila.mp3"
);



// Abrir link abu
const abu = document.querySelector("#abu");
if (abu) {
  abu.addEventListener("click", () => {
    window.open(
    "https://galerialacometa.com/exhibiciones/bogota/gabriela-pinilla-clandestina-es#:~:text=Carmenza%20o%20%E2%80%9Cla%20Chiqui%E2%80%9D%20como,historia%20de%20esta%20guerrilla%2C%20que", 
    "_blank");
  });
}

// Abrir link chiqui
const chiqui = document.querySelector("#chiqui");
if (chiqui) {
  chiqui.addEventListener("click", () => {
    window.open(
    "https://www.oigahermanohermana.org/article-in-memoriam-carmenza-cardona-londo-o-norma-125358390.html?utm_source=chatgpt.com", 
    "_blank");
  });
}





document.addEventListener("DOMContentLoaded", () => {
  const armario = document.querySelector("#armario");
  let movido = false; // estado inicial

  if (armario) {
    armario.addEventListener("click", () => {
      if (!movido) {
        armario.style.transform = "translateX(220px)";
        movido = true;
      } else {
        armario.style.transform = "translateX(0)";
        movido = false;
      }
    });
  }
});



const puerta = document.querySelector("#puerta");
if (puerta) {
  let abierta = false; // estado inicial (cerrada)

  puerta.addEventListener("click", () => {
    if (!abierta) {
      puerta.src = "assets/puertaA.png"; // imagen con la puerta abierta
      abierta = true;
    } else {
      puerta.src = "assets/puertas.jpg"; // vuelve a la imagen original
      abierta = false;
    }
  });
}

