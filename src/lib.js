"use strict";
let message = "Hello, Mom";
message.toLocaleLowerCase();
console.log(`${message}`);
let listOfUser = [
    {
        id: 2,
        name: "Kendrik",
        email: "endrik22@email.com",
        password: "admin123"
    },
    {
        id: 3,
        name: "Mia",
        email: "azamia21@email.com",
        password: "helloworld123"
    }
];
let user1 = {
    id: 1,
    name: "Daniel",
    email: "danialadmin@email.com",
    password: "secretadmin"
};
const flipCoin = Math.random() < 0.5 ? "A" : "B";
const getPersonData = (user) => {
    console.log(`Name: ${user.name}\nEmail: ${user.email}`);
};
getPersonData(user1);
listOfUser.forEach((user) => {
    getPersonData(user);
});
