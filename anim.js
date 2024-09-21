// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "YA LO VES ESTOY", time: 6 },
  { text: "TAN LOCO POR TI", time: 7 },
  { text: "CUANDO TE VEO VENIR", time: 8 },
  { text: "NO SÉ NI QUE DECIR", time: 9 },
  { text: "Y NO ENCUENTRO LA MANERA", time: 10 },
  { text: "DE DECIRTE LO QUE SIENTO", time: 11 },
  { text: "QUE TENGO UN NUDO POR DENTRO", time: 13 },
  { text: "QUE DE AMOR ME ESTOY MURIENDO", time: 14 },
  { text: "YA LO VES, YO VOY", time: 15 },
  { text: "SIEMPRE DETRÁS DE TI", time: 16 },
  { text: "PARA VER SI TÚ AL FIN", time: 18 },
  { text: "TE FIJARÍAS EN MÍ", time: 19 },
  { text: "PERO NO ENCUENTRO EL CAMINO", time: 20 },
  { text: "PARA QUE TÚ ESTÉS CONMIGO", time: 21 },
  { text: "MÁS LO TENGO DECIDIDO", time: 22 },
  { text: "VOY A SER MÁS QUE TU AMIGO", time: 23 },
  { text: "YA TE LO TENGO ADVERTIDO", time: 26 },
  { text: "LO TENGO BIEN DECIDIDO", time: 28 },
  { text: "YO TE VOY A ENAMORAR", time: 30 },
  { text: "CONMIGO TÚ VAS A ESTAR", time: 33 },
  { text: "NO QUIERAS DISIMULARLO", time: 35 },
  { text: "SI EN MÍ TAMBIÉN HAS PENSADO", time: 37 },
  { text: "VENTE CONMIGO QUE YO", time: 40 },
  { text: "QUIERO ESTAR CONTIGO", time: 41 },
  { text: "(NA-NA-NA, NA-NA)", time: 43 },
  { text: "MI DULCE NIÑA", time: 45 },
  { text: "(NA-NA-NA)", time: 46 },
  { text: "TÚ ME FASCINAS", time: 47 },
  { text: "(NA-NA-NA)", time: 48 },
  { text: "POR TU SONRISA", time: 50 },
  { text: "POR TU MIRADA LINDA", time: 51 },
  { text: "(NA-NA-NA, NA-NA)", time: 52 },
  { text: "MI DULCE NIÑA", time: 54 },
  { text: "(NA-NA-NA)", time: 55 },
  { text: "TÚ ERES MI VIDA", time: 56 },
  { text: "(NA-NA-NA)", time: 57 },
  { text: "CONTIGO NIÑA", time: 59 },
  { text: "QUIERO PASAR LOS DÍAS", time: 100 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 500);

//funcion titulo
// Función para ocultar el título después de 120 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 120 segundos
setTimeout(ocultarTitulo, 120000);