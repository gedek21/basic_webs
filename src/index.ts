interface Blog {
    id: number,
    title: string,
    picture: string,
    description: string
}


let japanese_poem_data: Blog [] = [
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
]

let app: HTMLElement = document.getElementById("container")!;

function renderData(blog: Blog) {
    // Create the card element
    let card: HTMLElement = document.createElement("div");
    card.classList.add("card");

    // Create the card header
    let thumbnail: HTMLElement = document.createElement("div");
    thumbnail.classList.add("card-img-container");

    // Create the img element
    let img: HTMLImageElement = document.createElement("img");
    img.classList.add("card-img")
    img.src = `./picture/${blog.picture}`
    img.alt = `image ${blog.title}`

    // Create the card body
    let body: HTMLElement = document.createElement("div");
    body.classList.add("card-content");

    // Create the title element
    let title: HTMLElement = document.createElement("h2");
    title.classList.add("card-title");
    title.innerText = blog.title;

    // Create the content element
    let content: HTMLElement = document.createElement("p");
    content.classList.add("card-text");
    content.innerText = blog.description;

    // Append the elements to the card
    body.appendChild(title);
    body.appendChild(content);
    thumbnail.appendChild(img);
    
    card.appendChild(thumbnail);
    card.appendChild(body);

    // Append the card to the container
    app.appendChild(card);
}

japanese_poem_data.forEach((data) => {
    renderData(data)
})

console.log("Hello")


