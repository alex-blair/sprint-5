
//Looping a triangle

for (var i = "#"; i.length < 8; i += "#") {
  console.log(i)
}

//FizzBuzz

for (var count = 1; count < 101; count++) {
  if ((count % 5) + (count % 3) === 0) {
    console.log("FizzBuzz");
  } else if (count % 3 === 0) {
    console.log("Fizz")
  } else if (count % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(count);
  }
}

//Chess Board

function printBoard(height, width) {
  for (i = 1; i < height + 1; i++) {
    { if (i % 2 === 0) {
        if (width % 2 === 0) {
          console.log(" #".repeat(width / 2));
        } else {
          console.log(" #".repeat(width / 2) + " ");
        }
    } else {
        if (width % 2 === 0) {
          console.log("# ".repeat(width / 2));
        } else {
          console.log("# ".repeat(width / 2) + "#");
        }
      }
    }
  }
}

printBoard(8,8)
