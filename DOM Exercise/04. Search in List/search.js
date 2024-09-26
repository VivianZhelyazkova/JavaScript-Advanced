function search() {
  const towns = document.querySelectorAll("#towns li");
  const input = document.querySelector("#searchText").value;
  const result = document.querySelector("#result");
  let counter = 0;

  for (let town of towns){
   town.style.fontWeight = "regular";
   town.style.textDecoration = "none";
      if (town.textContent.includes(input)){
         town.style.fontWeight = "bold";
         town.style.textDecoration = "underline";
         counter++;
      }
  }   
  result.textContent = `${counter} matches found`
}
