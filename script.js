function generarQR() {
  const input = document.getElementById("input-text").value;
  const qrcodeDiv = document.getElementById("qrcode");
  qrcodeDiv.innerHTML = ""; // Limpiar QR anterior

  if (input.trim() !== "") {
    new QRCode(qrcodeDiv, {
      text: input,
      width: 256,
      height: 256,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
  } else {
    alert("Por favor, ingresa un texto o URL.");
  }
}

  