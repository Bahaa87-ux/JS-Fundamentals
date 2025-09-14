const arrg = process.argv[2];
let int = parseInt(arrg);
const value = "X";
if (Number.isInteger(int)) {
    for (let i = 0; i < int; i++) {
        console.log(value.repeat(arrg))
    }
}else {console.log("Missing size");}