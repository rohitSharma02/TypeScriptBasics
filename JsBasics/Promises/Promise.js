let p = new Promise((resolve, reject) => {
    let result = 2 + 3
    if (result == 4) {
        resolve('Success');
    } else {
        reject('Failed');
    }
})

p.then((msg) => {
    console.log('then' + msg);
}).catch((error) => {
    console.log('catch' +error);
})