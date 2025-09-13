const arg1 = process.argv[2];

const int = parseInt(arg1)


if(Number.isInteger(int)){
    console.log("My number: "+ int) 
}else {
    console.log("Not a number")
}