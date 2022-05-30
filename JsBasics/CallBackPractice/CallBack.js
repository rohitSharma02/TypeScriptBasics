var batmanAppears = false;
var batmanDisappears = false;
function heroAppearanceCallBack(callBack, errorCallBack) {
    if (batmanDisappears) {
        errorCallBack({
            message: 'Where is Batman?'
        });
    }
    else if (batmanAppears) {
        errorCallBack({
            message: 'Batman...Where is your Batmobile ?'
        });
    }
    else {
        callBack('No crime on the streets');
    }
}
heroAppearanceCallBack(function (message) {
    console.log("success" + message);
}, function (error) {
    console.log(error.message);
});
