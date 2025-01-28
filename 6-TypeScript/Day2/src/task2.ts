// Given the data, define the interface "User" and use it accordingly.

// type User = unknown;
 
// const users: unknown[] = [
//  {
//    id: 1,
//    name: "Ahmed",
//    role: "SUPER_ADMIN",
//  },
//  {
//    id: "2",
//    name: "Mohammed",
//    age: 32,
//    role: "USER",
//  },
//  {
//    id: 3,
//    name: "Ali",
//    age: 36,
//    role: "ADMIN",
//  },
// ];

type typeOfId = number | string;
type typeOfName = string;
type typeOfAge = number;
type typeOfRole = "SUPER_ADMIN" | "USER" | "ADMIN";

interface User {
    id : typeOfId;
    name : typeOfName;
    age? : typeOfAge;
    role : typeOfRole;
}

const users: User[] = [
 {
   id: 1,
   name: "Ahmed",
   role: "SUPER_ADMIN",
 },
 {
   id: "2",
   name: "Mohammed",
   age: 32,
   role: "USER",
 },
 {
   id: 3,
   name: "Ali",
   age: 36,
   role: "ADMIN",
 },
];
