
//any
// can we of any type
//Enums
// const Enums = {
//     TYPE1 : 1,
//     TYPE2 : 2
// }
enum TYPE {TYPE1 = undefined, TYPE2 = 1}
//enum TYPE {TYPE1 = 5, TYPE2} means TYPE 2 will be 6 and so on...
const val = !TYPE?.TYPE1;
console.log(val);

//But disadvantage as we are not using the powers of typescript to it's fullest
let array: any[];
array = ["string", 1, true];
console.log(array);

//objects
let personObj1 = {
    name: "Ravi",
    age: 21,
    passion: ["football", "reading","cooking"],
    type: TYPE.TYPE2
}

for (const passion of personObj1.passion) {
    console.log(passion);
}

//tuples
let personObj2: {
    tname: string;
    tage: number;
    tpassion: string[];
    //tuples
    trole: [number, string]
}
= {
    tname: "Ravi",
    tage: 21,
    tpassion: ["football", "reading","cooking"],
    trole: [1,"string"]
}

for (const tpassion of personObj2.tpassion) {
    console.log(tpassion);
}

//Testing Enums
if(personObj1.type === TYPE.TYPE1) {
    console.log("this is type1");
} else {
    console.log("this is type2");
}









