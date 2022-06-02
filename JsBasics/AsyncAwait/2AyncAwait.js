const playerOut = true;

function p() {
    return new Promise((resolve, reject) => {
        if (playerOut) {
            setTimeout(()=>{
                reject(console.log("Player is out"));
            }, 3000)   
        } else {
            resolve(console.log("Player is not out"));
        }
    }).catch((err) =>{
        console.log(err);
    });
}

async function a(){
    console.log("Player 1 playing");
    console.log("Player 2 playing");
    await p();
    console.log("Player 3 came");
}

a();
