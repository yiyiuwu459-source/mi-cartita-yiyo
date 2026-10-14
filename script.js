
const misCartas = [
    {
        titulo: "llamadita ♡",
        mensaje: "Mi recuerdo favorito es cuando estabamos en llamada y me dijiste te amo (⇀‸↼‵‵)"
    },
    {
        titulo: "૮₍ ´ ꒳ `₎ა",
        mensaje: "Eres el amor de mi vida"
    },
    {
        titulo: "Recuerdo ૮ • ﻌ - ა",
        mensaje: "Nunca me arrenpentire en haberme quedado dormida en llamada en esa noche"
    },
    {
        titulo: "(∩˃o˂∩) ♡",
        mensaje: "Casemonossss jejeje"
    },
    {
        titulo: " Peleas (๑•̀ᗝ•́)૭",
        mensaje: "Perdon por decirte cosas hirientes y ser una persona egoista, pero desde mi corazon acepto mi error espero que tu confianza vuelva a mi"
    },
    {
        titulo: "ㅤ/ᐠ - ˕ -マ♥︎₍ᐢ. . ᐢ₎",
        mensaje: "En todas las vidas somos unos gatitos"
    },
    {
        titulo: "(♡ˊ͈ ꒳ ˋ͈)",
        mensaje: "Puedes confiar en mi yiyo si? siempre estoy aqui para ti :3"
    },
    {
        titulo: "(˶ ˘ ³˘)ˆᵕ ˆ˶)",
        mensaje: "Teamo mucho mi apestosito lindo"
    }
];

const contenedor = document.getElementById("cartas");

misCartas.forEach((carta, indice) => {
    const sobre = document.createElement("div");

    sobre.className = "sobre";

    sobre.innerHTML = `
        <div class="uwu">${["જ⁀➴ ♡","𖨆𖨆","𖹭.ᐟ","-`𖹭´-","⋆˚꩜｡","(♡ˊ͈ ꒳ ˋ͈)","(っ˶ ˘ ᵕ˘)ˆᵕ ˆ˶ς)","♡"][indice]}</div>
        <div class="nombre">Carta ${indice + 1}</div>
        <p>Haz clic para abrir ♡</p>
    `;

    sobre.addEventListener("click", () => abrirCarta(indice));

    contenedor.appendChild(sobre);
});


function abrirCarta(indice) {
    const carta = misCartas[indice];

    document.getElementById("titulo").textContent = carta.titulo;
    document.getElementById("mensaje").textContent = carta.mensaje;

    const seccion = document.getElementById("carta-abierta");
    seccion.classList.remove("oculta");

    seccion.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}



function cerrarCarta() {
    document.getElementById("carta-abierta").classList.add("oculta");
}
