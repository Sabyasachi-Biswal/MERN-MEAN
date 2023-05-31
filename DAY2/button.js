const button = document.getElementById("clickable");
button.addEventListener("click", () => {
    console.log("showable");
    const div=document.getElementById("showable")
    const image = document.createElement("img");
    image.src = "mountain.jpg"
    div.append(image);
});
const button2 = document.getElementById("not show");
button.addEventListener("Not show", () =>{
    console.log("deleted");
    window.location.reload();
});