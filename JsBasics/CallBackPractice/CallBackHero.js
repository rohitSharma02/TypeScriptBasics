//Find issue with the callback functions
const dc = true;
const marvel = true;


function callbackUniverse(callback, error) {
    if (dc) {
        error(console.log("dc universe"));
    } else if (marvel) {
        error(console.log("marvel universe")); 
    } else {
        callback(console.log("can be a hybrid verse"));
    }
}

callbackUniverse((msg) => {
    console.log("Success" + msg);
}, (err)=>{
    console.log("failed " + err);
})