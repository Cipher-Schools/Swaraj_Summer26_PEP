let x: number = 10;
let str: string = "Hello, TypeScript!";
let isActive: boolean = true;

let temp: any = "This can be any type";
temp = 40;
temp = { name: "John", age: 30 };

function tempFn(a: number, b: number): number {
  return a + b;
}

const result = tempFn(5, 10);
console.log(`The result of tempFn is: ${result}`);

let arr: number[] = [1, 2, 3, 4, 1];
// let arr: number[] = [1, 2, 1, 4, 1, 4, 4, 4];

let arr2: Array<string> = ["Hello", "TypeScript", "Array"];

let unknownData: unknown = "This is an unknown type";
unknownData = 34;

if (typeof unknownData === "string") {
  console.log(`The unknownData is a string: ${unknownData}`);
}

function t1(name: string, age?: number): string {
  if (age) {
    return `Name: ${name}, Age: ${age}`;
  }
  return `Name: ${name}`;
}

interface Person {
  readonly name: string;
  age?: number;
}

let obj: Person = {
  name: "John",
  age: 30,
};

type Admin = "Head" | "Manager" | "Employee";

let personA: Admin = "Head";

class Students {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const accordionData: Array<{ title: string; content: string; isOpen: boolean }> = [
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

