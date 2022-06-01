const goodShot = true;
const badShort = false;

function callBackCricket(callback, error) {
    if (goodShot) {
        error ({
            name: "Sachin played",
            message: "bad Shot"
        });   
    } else if (badShort) {
        error ({
            name: "Sachin played",
            message: "good Shot"
        });    
    } else {
        callback("Sachin defended well"); 
    }
}

callBackCricket((msg) => {
    console.log("Won "+msg);
}, (error) => {
    console.log(error.name + " "+error.message);
});

