// ===== VIDEO AUTOMATICO =====

const channelID = "UCmumvqgsOpGcPnBTh6Ogebw"; // REEMPLAZAR

const rssURL = "https://www.youtube.com/feeds/videos.xml?channel_id=" + channelID;

async function cargarUltimoVideo(){

try{

let response = await fetch(rssURL);
let data = await response.text();

let parser = new DOMParser();
let xml = parser.parseFromString(data,"text/xml");

let videoID = xml.getElementsByTagName("yt:videoId")[0].textContent;

document.getElementById("videoFrame").src =
"https://www.youtube.com/embed/" + videoID;

}catch(e){

console.log("Error cargando video", e);

}

}

cargarUltimoVideo();


// ===== FUNCIONES =====

function mostrarAlerta(){

let alerta = document.getElementById("alerta");

alerta.style.display="block";
alerta.innerHTML="Hoy hay actividades culturales para adultos mayores.";

}

function abrirPagina(){

window.open("https://www.argentina.gob.ar/ips");

}

function verContenido(){

document.getElementById("contenido").innerHTML=`

<ul>
<li>🎵 Efemérides musicales</li>
<li>📚 Talleres culturales</li>
<li>🎭 Actividades comunitarias</li>
<li>👵 Programas para adultos mayores</li>
</ul>

`;

}

function compartirWhatsapp(){

let texto="Mirá el último video del IPS";

window.open("https://wa.me/?text="+encodeURIComponent(texto));

}


// ===== SERVICE WORKER =====

if("serviceWorker" in navigator){

navigator.serviceWorker.register("service-worker.js");

}