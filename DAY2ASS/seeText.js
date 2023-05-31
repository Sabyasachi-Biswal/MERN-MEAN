const button1 = document.getElementById("clickable1");
const button2 = document.getElementById("clickable2");
const textarea = document.getElementById("content");

button1.addEventListener("click", ()=>{
    textarea.innerText="The Taj Mahal Palace is a heritage, five-star, luxury hotel in the Colaba area of Mumbai, Maharashtra, India, situated next to the Gateway of India. Built in the Indo-Saracenic style, it opened in 1903 as the Taj Mahal Hotel and has historically often been known simply as The Taj. The hotel is named after the Taj Mahal, which is located in the city of Agra approximately 1,050 kilometres (650 mi) from Mumbai. It has been considered one of the finest hotels in the East since the time of the British Raj. The hotel was one of the main sites targeted in the 2008 Mumbai attacks";
})

button2.addEventListener("click", ()=>{
    textarea.innerText="";
})