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
      img.style.borderRadius = "6px";
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

  // 🔹 Aquí activas el proceso en cada imagen con sus fotos
  activarSecuencia(".cuadros", [
    "assets/family.jpg",
    "assets/marcha.png",
    "assets/unidad.png",
    "assets/secuestro.png",
    "assets/machete.png",
    "assets/guerra.png",
    
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
    "assets/hippie.png",
   
  ]);

  activarSecuencia ("#pap", [
    "assets/zombie.png",
  ]);


activarSecuencia("#boli", [
    "assets/lider.png",
    

  ]);

activarSecuencia("#libros", [
    "assets/loca.jpg",
    "assets/marcha2.png",
     "assets/muerte.png",

    
  ]);

  activarSecuencia("#carta", [
    "assets/cartitas.jpg",
 
  ]);

  activarSecuencia("#chiqui", [
      "assets/hell.png",
      "assets/m19.png",
    
  ]);
  
   activarSecuencia("#mapa", [
      "assets/vieja.png",
      "assets/soldaditos.png",
      "assets/farc2.jpg",
    
  ]);

activarSecuencia("#frai", [
      "assets/gol.png",
  ]);

   




});



