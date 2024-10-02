function create(words) {
  const content = document.getElementById("content");
  words.forEach((word) => {
    const sectionDiv = document.createElement("div");
    const par = document.createElement("p");
    par.style.display = "none";
    par.textContent = word;
    sectionDiv.addEventListener("click", () =>{par.style.display = "inline-block"})
    sectionDiv.appendChild(par);
    content.appendChild(sectionDiv);
  });
}
