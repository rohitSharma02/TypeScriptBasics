const goodShot = false;
const badShort = false;

let p = new Promise((resolve, reject) => {
    if (goodShot) {
        reject ({
            name: "Sachin played",
            message: "bad Shot"
        });   
    } else if (badShort) {
        reject ({
            name: "Sachin played",
            message: "good Shot"
        });    
    } else {
        resolve("Sachin defended well"); 
    }
});

p.then((msg)=>{
    console.log("Won "+msg); 
}).catch((error) => {
    console.log(error.name + " "+error.message);
});
// callBackCricket((msg) => {
//     console.log("Won "+msg);
// }, (error) => {
//     console.log(error.name + " "+error.message);
// });