/*
At its core, optional chaining lets us write code where TypeScript can immediately 
stop running some expressions if we run into a null or undefined. The star of 
the show in optional chaining is the new ?. operator for optional 
property accesses.
*/

const a = {
    b: "value"
  }

function ans() {
    // if (a == undefined) {
    //     return undefined;
    // } else {
    //     return a.b;
    // }
    //if ( a== undefined) ? undefined : a.b;
    const ans = a?.b;
    return ans;
}  
ans();
console.log(ans());


// 