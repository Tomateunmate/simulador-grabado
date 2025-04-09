document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("designCanvas");
  const ctx = canvas.getContext("2d");
  const mateImg = document.getElementById("mateBase");
  const topInput = document.getElementById("topText");
  const bottomInput = document.getElementById("bottomText");
  const fontSelect = document.getElementById("fontSelector");
  const downloadBtn = document.getElementById("downloadBtn");
  const whatsappBtn = document.getElementById("whatsappBtn");

  const draw = () => {
    canvas.width = mateImg.width;
    canvas.height = mateImg.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.font = `20px ${fontSelect.value}`;
    ctx.textAlign = "center";
    ctx.fillText(topInput.value, canvas.width / 2, 30);
    ctx.fillText(bottomInput.value, canvas.width / 2, canvas.height - 20);
  };

  topInput.addEventListener("input", draw);
  bottomInput.addEventListener("input", draw);
  fontSelect.addEventListener("change", draw);

  downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "diseno-mate.png";
    link.href = canvas.toDataURL();
    link.click();
  });

  whatsappBtn.href = "https://wa.me/5493584018123?text=Hola!%20Estuve%20usando%20el%20simulador%20de%20grabado%20y%20me%20gustar%C3%ADa%20avanzar%20con%20este%20dise%C3%B1o%20personalizado.";

mateImg.onload = draw;

});
