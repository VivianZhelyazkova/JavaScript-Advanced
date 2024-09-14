function even(input) {
    result = [];
    input.forEach((element, index) => {
      if (index % 2 === 0) {
        result.push(element);
      }
    });
    console.log(result.join(' '));
    
  }
even(["20", "30", "40", "50", "60"]);
