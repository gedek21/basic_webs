"use strict";
let japanese_poem_data = [
    {
        id: 1,
        title: "古池や 蛙飛び込む 水の音",
        picture: "thumbnail1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur omnis earum, inventore aut ab perferendis recusandae voluptatem ex, in rerum aliquam veritatis ratione sint blanditiis facilis iure at error?"
    },
    {
        id: 2,
        title: "痩蛙 負けるな一茶 是にあり",
        picture: "thumbnail2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur omnis earum, inventore aut ab perferendis recusandae voluptatem ex, in rerum aliquam veritatis ratione sint blanditiis facilis iure at error?"
    },
    {
        id: 3,
        title: "菜の花や 月は東に 日は西に",
        picture: "thumbnail3.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur omnis earum, inventore aut ab perferendis recusandae voluptatem ex, in rerum aliquam veritatis ratione sint blanditiis facilis iure at error?"
    }
];
let app = document.getElementById("container");
japanese_poem_data.forEach((data) => {
    // Create the card element
    let card = document.createElement("div");
    card.classList.add("card");
    // Create the card header
    let thumbnail = document.createElement("div");
    thumbnail.classList.add("card-img-container");
    // Create the img element
    let img = document.createElement("img");
    img.classList.add("card-img");
    img.src = `./picture/${data.picture}`;
    img.alt = `image ${data.title}`;
    // Create the card body
    let body = document.createElement("div");
    body.classList.add("card-content");
    // Create the title element
    let title = document.createElement("h2");
    title.classList.add("card-title");
    title.innerText = data.title;
    // Create the content element
    let content = document.createElement("p");
    content.classList.add("card-text");
    content.innerText = data.description;
    // Append the elements to the card
    body.appendChild(title);
    body.appendChild(content);
    thumbnail.appendChild(img);
    card.appendChild(thumbnail);
    card.appendChild(body);
    // Append the card to the container
    app.appendChild(card);
});
console.log("Hello");
