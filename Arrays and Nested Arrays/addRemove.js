function addRemove(input) {
  let result = [];
  let currNum = 1;
  for (let command of input) {
    switch (command) {
      case "add":
        result.push(currNum);
        break;
      case "remove":
        result.pop();
        break;
    }
    currNum++;
  }
  if (result.length <= 0) {
    console.log("Empty");
  } else {
    console.log(result.join("\n"));
  }
}
addRemove(["add", "add", "remove", "add", "add"]);
