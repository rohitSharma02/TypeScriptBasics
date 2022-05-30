const batmanAppears = true;
const batmanDisappears = false;

let heroAppearanceCallBack = new Promise((resolve, reject)=> {
    if (batmanDisappears) {
        reject({
            message: 'Where is Batman?'
        });
    }
    else if (batmanAppears) {
        reject({
            message: 'Batman...Where is your Batmobile ?'
        });
    }
    else {
        resolve('No crime on the streets');
    }
});

heroAppearanceCallBack.then((msg) => {
    console.log(msg.message);
}).catch((err) => {
    console.log(err.message);
})

// function heroAppearanceCallBack(callBack, errorCallBack) {
//     if (batmanDisappears) {
//         errorCallBack({
//             message: 'Where is Batman?'
//         });
//     }
//     else if (batmanAppears) {
//         errorCallBack({
//             message: 'Batman...Where is your Batmobile ?'
//         });
//     }
//     else {
//         callBack('No crime on the streets');
//     }
// }
// heroAppearanceCallBack(function (message) {
//     console.log("success" + message);
// }, function (error) {
//     console.log(error.message);
// });
