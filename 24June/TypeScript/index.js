"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 10;
let str = "Hello, TypeScript!";
let isActive = true;
let temp = "This can be any type";
temp = 40;
temp = { name: "John", age: 30 };
function tempFn(a, b) {
    return a + b;
}
const result = tempFn(5, 10);
console.log(`The result of tempFn is: ${result}`);
let arr = [1, 2, 3, 4, 1];
// let arr: number[] = [1, 2, 1, 4, 1, 4, 4, 4];
let arr2 = ["Hello", "TypeScript", "Array"];
let unknownData = "This is an unknown type";
unknownData = 34;
if (typeof unknownData === "string") {
    console.log(`The unknownData is a string: ${unknownData}`);
}
function t1(name, age) {
    if (age) {
        return `Name: ${name}, Age: ${age}`;
    }
    return `Name: ${name}`;
}
let obj = {
    name: "John",
    age: 30,
};
let personA = "Head";
class Students {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const accordionData = [
    {
        title: "HTML",
        content: "Learn the basics of HTML.",
        isOpen: false,
    },
    {
        title: "CSS",
        content: "Style your web pages with CSS.",
        isOpen: false,
    },
    {
        title: "JavaScript",
        content: "Add interactivity to your website.",
        isOpen: false,
    },
    {
        title: "React",
        content: "Build UI using components.",
        isOpen: false,
    },
];
//# sourceMappingURL=index.js.map