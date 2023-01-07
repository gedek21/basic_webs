"use strict";
let japanese_poem_data = [
    {
        title: "古池や 蛙飛び込む 水の音",
        picture: "thumbnail1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur omnis earum, inventore aut ab perferendis recusandae voluptatem ex, in rerum aliquam veritatis ratione sint blanditiis facilis iure at error?"
    },
    {
        title: "痩蛙 負けるな一茶 是にあり",
        picture: "thumbnail2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur omnis earum, inventore aut ab perferendis recusandae voluptatem ex, in rerum aliquam veritatis ratione sint blanditiis facilis iure at error?"
    },
    {
        title: "菜の花や 月は東に 日は西に",
        picture: "thumbnail3.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur omnis earum, inventore aut ab perferendis recusandae voluptatem ex, in rerum aliquam veritatis ratione sint blanditiis facilis iure at error?"
    }
];
let container = document.getElementById("container");
japanese_poem_data.forEach((data) => {
    // Create the card element
    let card = document.createElement("div");
    card.classList.add("card");
    // Create the card header
    let header = document.createElement("div");
    header.classList.add("card-header");
    header.innerText = "Latest News";
    // Create the card body
    let body = document.createElement("div");
    body.classList.add("card-body");
    // Create the title element
    let title = document.createElement("h4");
    title.classList.add("card-title");
    title.innerText = data.title;
    // Create the content element
    let content = document.createElement("p");
    content.classList.add("card-text");
    content.innerText = data.description;
    // Create the read more button
    //   let button: HTMLElement = document.createElement("a");
    //   button.classList.add("btn", "btn-primary");
    //   button.innerText = "Read More";
    //   button.href = "#";
    // Append the elements to the card
    body.appendChild(title);
    body.appendChild(content);
    card.appendChild(header);
    card.appendChild(body);
    // Append the card to the container
    container.appendChild(card);
});
console.log("Hello");
