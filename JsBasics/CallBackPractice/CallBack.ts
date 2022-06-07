const batmanAppears = true;
const batmanDisappears = true;

function heroAppearanceCallBack(callBack, errorCallBack) {
    if (batmanDisappears) {
        errorCallBack({
            message: 'Where is Batman?' 
        })
    } else if (batmanAppears){
        errorCallBack({
            message: 'Batman...Where is your Batmobile ?'
        })
    } else {
        callBack('No crime on the streets')
    }
}

heroAppearanceCallBack((message) => {
    console.log("success" +message);
}, (error)=> {
    console.log(error.message);
})