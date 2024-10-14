const videoElement = document.getElementById("video");
const button = document.getElementById("button");
const reloadButton = document.getElementById("reload-button");

// Prompt the user to select a media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (error) {
        console.log("Oops, error here:", error);
    }
}

button.addEventListener("click", async() => {
    // Disable the button
    button.disabled = true;

    // Start Picture in Picture
    await videoElement.requestPictureInPicture();

    // Reset button
    button.disabled = false;
});

reloadButton.addEventListener("click", () => {
    window.location.reload();
});

// On Load
selectMediaStream();
