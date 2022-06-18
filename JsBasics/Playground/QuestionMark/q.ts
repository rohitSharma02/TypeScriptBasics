interface User {
    name: string,
    // ? means optional
    email?: string,
}

//Will give the following error without ? : 
// Property 'email' is missing in type '{ name: string; }' but required in type 'User'.
// let user1: User = {
//     name: "rohit"
// }

let user1: User = {
    name: "rohit",
    
}

console.log(user1);