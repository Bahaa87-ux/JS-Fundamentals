const arg1 = process.argv[2];
const argValue = parseInt(arg1)
let i = 0;
if(Number.isInteger(argValue)){
while (i < argValue) {
  console.log("C is fun");
  i++;
}
}else{
    console.log("Missing number of occurrences");
}