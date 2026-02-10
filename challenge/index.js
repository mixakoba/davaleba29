const textarea=document.getElementById("text-area");
const counter=document.getElementById("counter");
const limit=50;
textarea.addEventListener("input",() => {
    const length=textarea.value.length;
    counter.textContent=`${length}/50`;
    if (length>limit) {
        counter.classList.add("red");
    } else {
        counter.classList.remove("red");
    }
});
const form=document.getElementById("todoForm");
const input=document.getElementById("todoInput");
const list=document.getElementById("todoList");

form.addEventListener("submit",function (e) {
    e.preventDefault();
    const text=input.value.trim();
    if (text === "") return;
    const li=document.createElement("li");
    li.textContent=text;
    list.appendChild(li);
    input.value="";
});
const button=document.getElementById("btn");
button.addEventListener("click", function () {
    const r=Math.floor(Math.random() * 256);
    const g=Math.floor(Math.random() * 256);
    const b=Math.floor(Math.random() * 256);
    document.body.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;});
