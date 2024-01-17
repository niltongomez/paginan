// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Mi amada esposa catherin ❤️", time: 15 },
  { text: "en tus ojos encuentro la paz y la felicidad", time: 18 },
  { text: "Tu sonrisa ilumina mi día ", time: 27 },
  { text: "y tu amor me llena de calidez y ternura", time: 32 },
  { text: "Eres la persona con la que quiero envejecer", time: 33 },
  { text: "compartiendo risas", time: 41 },
  { text: "lágrimas y sueños.", time: 47 },
  { text: "Agradezco cada sacrificio que has", time: 54 },
  { text: "hecho por nuestra familia y por nuestro amor.", time: 57 },
  { text: "Eres mi roca,", time: 59 },
  { text: "mi confidente y mi inspiración. ", time: 67 },
  { text: "Te prometo amarte y cuidarte siempre,", time: 72 },
  { text: "en cada paso de nuestro viaje juntos.", time: 78 },
  { text: "te amo con todo mi corazon", time: 83 },
  { text: "te amo hoy", time: 91 },
  { text: "mañana", time: 97 },
  { text: "y siempre te amare", time: 104 },
  { text: "espero que este detalle a sido de tu agrado amor mio catherin ❤️💙", time: 120 },
  { text: "mi familia NCDK ❤️💙", time: 128 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
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

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);