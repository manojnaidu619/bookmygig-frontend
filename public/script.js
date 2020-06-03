
// Videoplayer part

const sText = document.querySelector('.stream-text')
sText.style.display = "none"

if(window.location.pathname.startsWith("/gig/")){
    sText.style.display = "block"
}

function loadVideo(gigId){
    if (flvjs.isSupported()) {
        var videoElement = document.getElementById('videoElement');
        var flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${gigId}.flv`
        });
        flvPlayer.attachMediaElement(videoElement)
        flvPlayer.load()
        flvPlayer.play()
    }
}

// Web monetization part

if (document.monetization) {
    document.monetization.addEventListener(
        "monetizationstop",
         console.log("Monetization Stop")
    );
      document.monetization.addEventListener(
        "monetizationstart",
         console.log("Monetization Start")
    );
      document.monetization.addEventListener(
        "monetizationpending",
        console.log("Monetization Pending")
    );
      document.monetization.addEventListener(
        'monetizationprogress', 
         console.log("Monetization Progress")
    );
} else {
    console.log("Monetization not supported")
}