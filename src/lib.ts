let message: string = "Hello, Mom";
message.toLocaleLowerCase();

console.log(`${message}`);

interface User {
    id:number, 
    name:string, 
    email:string, 
    password:string
}

let listOfUser: User [] = [
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
]

let user1: User = {
    id: 1,
    name: "Daniel",
    email: "danialadmin@email.com",
    password: "secretadmin"
}

const flipCoin = Math.random() < 0.5 ? "A" : "B"

const getPersonData = (user: User) => {
    console.log(`Name: ${user.name}\nEmail: ${user.email}`);
}

getPersonData(user1);
listOfUser.forEach((user) => {
    getPersonData(user)
})