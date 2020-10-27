// Draws number from 1..n
function drawNumber(n) {
  return Math.floor(Math.random() * n) + 1;
}


// TASK 1
  // const range = 49;
  // const outcome = [];

  // for (let i = 0; i < 6; i++) {
  //   const result = drawNumber(range);
  //   outcome.push(result);
  // }
  // alert("Randomization results: " + outcome + ".");


  // TASK 2
  // const range = 49;
  // const outcome = [];

  // while(outcome.length < 6) {
  //   const result = drawNumber(range);
  //   if(outcome.indexOf(result) === -1) {
  //     outcome.push(result);
  //   }
  // }
  // alert("Randomization (unique) results: " + outcome + ".");


  // TASK 3
  const range = 49;
  const a = [];
  while(a.length < 6) {
    const result = drawNumber(range);
    if(a.indexOf(result) === -1) {
      a.push(result);
    }
  }

  const b = [];
  while(b.length < 6) {
    const result = drawNumber(range);
    if(b.indexOf(result) === -1) {
      b.push(result);
    }
  }

  const equalElement = [];
  if (a.length === b.length) {
    for (let i = 0; i < 6; i++) {
      let element = a[i];
      if (b.indexOf(element) !== -1) {
        equalElement.push(element);
      }
    }
  }

  console.log(a);
  console.log(b);
  if (equalElement.length > 0) {
    console.log("Numbers that appeared in both draws: " + equalElement + ".");
  }
  
