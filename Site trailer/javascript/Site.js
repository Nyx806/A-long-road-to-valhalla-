document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('videoPlayer');
    var volumeControl = document.getElementById('volume');
    var playButton = document.getElementById('playButton');
    volumeControl.addEventListener('input', function () {
        video.volume = volumeControl.value;
    });
});

function ignorerVideo() {
    alert("Vidéo ignorée!");
}
document.getElementById("ignorerBtn").addEventListener("click", ignorerVideo);