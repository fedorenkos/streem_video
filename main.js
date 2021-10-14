const video = document.getElementById("webcam")

async function getMedia() {
  let stream = null

  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true })
    video.srcObject = stream
  } catch (err) {
    console.log("error")
  }
}

getMedia()