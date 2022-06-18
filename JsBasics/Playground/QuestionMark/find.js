"use strict";
exports.__esModule = true;
// export interface AnyObject {
//     [key: String]: any;
// }
var inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];
function isCherries(fruit) {
    return fruit.name === 'cherries';
}
console.log(inventory.find(isCherries));
// const pendingId = (confirm: AnyObject[]) => {
//     //predicate: child threw a ball
//     // 
//     const pending = confirm?.find((woc) => {
//         return 
//     })
// }
