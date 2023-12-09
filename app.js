let imgBox = document.getElementById("imgBox")
let qrImage = document.getElementById("qrImage")
let qrText = document.getElementById("qrText")

async function generateQR() {
  if (qrText.value) {
    qrImage.src = (await `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`) + qrText.value
  } else {
    qrText.classList.add("error")
    setTimeout(() => {
      qrText.classList.remove("error")
    }, 1000)
    throw new Error("Missing text or URL")
  }
  imgBox.classList.add("show-img")
}
