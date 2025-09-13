const arg1 = process.argv[2];
const argValue = parseInt(arg1)

if(Number.isInteger(argValue)){
    for(let i = 0; i < argValue; i++){
        console.log("C is fun");
    }
}else{
    console.log("Missing number of occurrences");
}

// typeof argValue === "number"
// the problem was to make valur from  arg1 to number 