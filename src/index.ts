let japanese_poem_data: {id: Number, title: string, picture: string, description: string}[] = [
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

japanese_poem_data.forEach((data) => {

  // Create the card element
  let card: HTMLElement = document.createElement("div");
  card.classList.add("card");

  // Create the card header
  let header: HTMLElement = document.createElement("div");
  header.classList.add("card-header");
  header.innerText = "Latest News";

  // Create the card body
  let body: HTMLElement = document.createElement("div");
  body.classList.add("card-body");

  // Create the title element
  let title: HTMLElement = document.createElement("h4");
  title.classList.add("card-title");
  title.innerText = data.title;

  // Create the content element
  let content: HTMLElement = document.createElement("p");
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
  app.appendChild(card);
})

console.log("Hello")


