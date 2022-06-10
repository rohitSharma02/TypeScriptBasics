// export interface Constructor<T = any> {
//     new (...args: any[]): T;
// }

// export interface AnyObject {
//     [key: String]: any;
// }
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
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