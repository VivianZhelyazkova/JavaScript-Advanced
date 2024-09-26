function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const search = document.querySelector("#searchField").value;
    const elements = Array.from(document.querySelectorAll("tbody td"));
    elements.forEach((el) => el.parentElement.classList.remove("select"));
    elements.forEach((el) => {
      if (el.textContent.includes(search)) {
        el.parentElement.classList.add("select");
      }
    });
  }
}
