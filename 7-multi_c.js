const arg1 = process.argv[2];
const argValue = parseInt(arg1, 10);

if (Number.isInteger(argValue)) {
  for (let i = 0; i < argValue; i++) {
    console.log("C is fun");
  }
} else {
  console.log("Missing number of occurrences");
}
