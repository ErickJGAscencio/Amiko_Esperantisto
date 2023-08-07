
window.onload = function() {
    var texto = document.getElementById('txt-1');
    texto.classList.add('aparecer');
    texto.style.opacity = 1;
    texto.style.transform = 'translateY(0px)';
    texto.style.zIndex = 0;

    
    var texto = document.getElementById('txt-2');
    texto.classList.add('aparecer');
    texto.style.opacity = 0;
    texto.style.transform = 'translateY(0px)';
}


var video = document.getElementById("videoPlayer");
var seekBar = document.getElementById("seekBar");
var titulo = document.getElementById("titulo");

var videoName;

// function playPause() {
//     if (video.paused)
//         video.play();
//     else
//         video.pause();
// }

function setNameVideo(name, titulo) {
    videoName = name;
    LoadVideo(titulo);
}

function LoadVideo(tituloT) {
    var newRoot = "Videos/" + videoName;
    video.setAttribute('src', newRoot);
    titulo.innerText = tituloT;
    video.load();
    video.play();
}
