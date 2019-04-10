var value = process.argv[2];

while(value > 1){
    value = value % 2;
}

if(value == 0) console.log("PAR") 
if(value == 1) console.log("IMPAR");