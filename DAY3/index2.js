const data = [ 
    {
        image: "antman.jpeg",
        title: "Star War",
        rating: 5,
    },
    {
        image: "antman.jpeg",
        title: "Star War",
        rating: 5,
    },
    {
        image: "antman.jpeg",
        title: "Star War",
        rating: 5,
    },
    {
        image: "antman.jpeg",
        title: "Star War",
        rating: 5,
    },
];

const movieBox = document.getElementById("show_movies")

for(i=0;i<data.length;i++){
    const div = document.createElement("div");
    const image=document.createElement("img");
    image.src=data[i].image;
    const movieTitle=document.createElement("h1");
    movieTitle.innerText=data[i].title;
    const rating=document.createElement("p");
    rating.innerText=data[i].rating;
    div.append(image,movieTitle,rating);
    movieBox.append(div);
}

