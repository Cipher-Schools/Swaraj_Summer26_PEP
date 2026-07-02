export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  phone: string;
  city: string;
  profession: string;
  salary: number;
}

export const users: User[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    age: 22,
    email: "aarav@example.com",
    phone: "9876543210",
    city: "Delhi",
    profession: "Software Engineer",
    salary: 65000,
  },
  {
    id: 2,
    name: "Priya Verma",
    age: 25,
    email: "priya@example.com",
    phone: "9876543211",
    city: "Mumbai",
    profession: "UI/UX Designer",
    salary: 70000,
  },
  {
    id: 3,
    name: "Rohan Singh",
    age: 28,
    email: "rohan@example.com",
    phone: "9876543212",
    city: "Noida",
    profession: "Backend Developer",
    salary: 85000,
  },
  {
    id: 4,
    name: "Sneha Patel",
    age: 24,
    email: "sneha@example.com",
    phone: "9876543213",
    city: "Ahmedabad",
    profession: "QA Engineer",
    salary: 60000,
  },
  {
    id: 5,
    name: "Vikram Mehta",
    age: 30,
    email: "vikram@example.com",
    phone: "9876543214",
    city: "Pune",
    profession: "DevOps Engineer",
    salary: 95000,
  },
  {
    id: 6,
    name: "Ananya Gupta",
    age: 21,
    email: "ananya@example.com",
    phone: "9876543215",
    city: "Jaipur",
    profession: "Frontend Developer",
    salary: 55000,
  },
  {
    id: 7,
    name: "Kabir Malhotra",
    age: 27,
    email: "kabir@example.com",
    phone: "9876543216",
    city: "Chandigarh",
    profession: "Data Analyst",
    salary: 78000,
  },
  {
    id: 8,
    name: "Meera Joshi",
    age: 26,
    email: "meera@example.com",
    phone: "9876543217",
    city: "Bengaluru",
    profession: "Product Manager",
    salary: 110000,
  },
  {
    id: 9,
    name: "Aditya Kapoor",
    age: 29,
    email: "aditya@example.com",
    phone: "9876543218",
    city: "Hyderabad",
    profession: "Full Stack Developer",
    salary: 98000,
  },
  {
    id: 10,
    name: "Ishita Roy",
    age: 23,
    email: "ishita@example.com",
    phone: "9876543219",
    city: "Kolkata",
    profession: "Mobile Developer",
    salary: 72000,
  },
];

export const buttonSizes = {
  SM : 'h-[35px] w-50 text-sm',
  MD : 'h-[40px] w-60 text-md',
  LG : 'h-[45px] w-70 text-lg',
  XL : 'h-[50px] w-80 text-xl'
};

const buttonTypes = {
  PRIMARY: 'bg-blue-500 hover:bg-blue-700 text-white',
  SUCCESS: 'bg-green-500 hover:bg-green-700 text-white',
  WARNING: 'bg-yellow-500 hover:bg-yellow-700 text-white',
  DANGER: 'bg-red-500 hover:bg-red-700 text-white',
};

export const buttonConfig = {
  sizes: buttonSizes,
  types: buttonTypes,
};
