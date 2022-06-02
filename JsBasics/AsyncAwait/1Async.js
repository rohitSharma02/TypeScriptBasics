const { rejects } = require("assert");

const solid = false;

function f() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(console.log("testing await"))
        },4000)
        
    })
}

async function p(){
    console.log("1");
    console.log("2");
    console.log("3");
    await f();
    console.log("4");
    console.log("5");
}

p();


