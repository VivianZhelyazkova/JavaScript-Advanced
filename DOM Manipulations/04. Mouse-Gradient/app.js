function attachGradientEvents() {
  const output = document.getElementById("result");
  const box = document.getElementById("gradient");
  box.addEventListener("mousemove", onMove);
  
  function onMove(event) {
    const offset = Math.floor((event.offsetX / box.offsetWidth) * 100) + "%";
    output.textContent = offset;
  }
}
