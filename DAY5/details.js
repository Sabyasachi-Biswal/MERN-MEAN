const id = JSON.parse(localStorage.getItem("id"));
console.log(id);
const show = document.getElementById("show_details");

fetch(`http://localhost:8080/racipe/${id}`,{
    method: "GET"
})
.then((res) => res.json())
.then((data) => appendData(data));

function appendData(data){
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = data.image;
    const item = document.createElement("h1");
    item.innerText = data.item;
    const description = document.createElement("h5");
    description.innerText= data.description;
    div.append(img, item,description);
    show.append(div);
}