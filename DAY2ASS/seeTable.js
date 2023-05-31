const button3 = document.getElementById("clickable3");
const button4 = document.getElementById("clickable4");
const table = document.querySelector("tbody");

button3.addEventListener("click", ()=>{
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText="1";
    const td2 = document.createElement("td");
    td2.innerText="Indian Hotels Company Limited,";
    const td3 = document.createElement("td");
    td3.innerText="Sorabji Contractor"
    const td4 = document.createElement("td");
    td4.innerText="200"
    tr.append(td1,td2,td3,td4);
    table.append(tr);
});


button4.addEventListener("click", ()=>{
    window.location.reload();
});