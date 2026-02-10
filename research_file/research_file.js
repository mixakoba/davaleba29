const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const box = document.getElementById("box")
const input = document.getElementById("input")
const form = document.getElementById("form")
const link = document.getElementById("link")
const parent = document.getElementById("parent")
const child = document.getElementById("child")
const list = document.getElementById("list")

btn1.onclick=function () {
    console.log("click 1")
}

btn2.addEventListener("click",function () {
    console.log("click 2")
})

function handlerA() {
    console.log("handler A")
}

function handlerB() {
    console.log("handler B")
}

btn2.addEventListener("click",handlerA)
btn2.addEventListener("click",handlerB)

btn3.addEventListener("click",function () {
    btn2.removeEventListener("click",handlerA)
})

box.addEventListener("mouseenter",function () {
    box.style.backgroundColor="green"
})

box.addEventListener("mouseleave",function () {
    box.style.backgroundColor="red"
})

box.addEventListener("mousemove",function (e) {
    console.log(e.clientX, e.clientY)
})

box.addEventListener("dblclick",function () {
    alert("double")
})

box.addEventListener("contextmenu",function (e) {
    e.preventDefault()
})

box.addEventListener("mousedown",function (e) {
    console.log(e.button)
})

box.addEventListener("mouseup",function () {
    console.log("up")
})

input.addEventListener("keydown",function (e) {
    console.log(e.key)
})

input.addEventListener("keyup",function (e) {
    console.log(e.key)
})

input.addEventListener("keypress",function (e) {
    console.log(e.key)
})

input.addEventListener("input",function (e) {
    console.log(e.target.value)
})

input.addEventListener("focus",function () {
    input.style.border = "2px solid blue"
})

input.addEventListener("blur",function () {
    input.style.border = "2px solid gray"
})

form.addEventListener("submit",function (e) {
    e.preventDefault()
    console.log("submit")
})

link.addEventListener("click",function (e) {
    e.preventDefault()
})

window.addEventListener("load",function () {
    console.log("load")
})

document.addEventListener("DOMContentLoaded",function () {
    console.log("dom")
})

window.addEventListener("resize",function () {
    console.log(window.innerWidth)
})

window.addEventListener("scroll",function () {
    console.log("scroll")
})

setTimeout(function () {
    console.log("timeout 1")
}, 1000)

setTimeout(function () {
    console.log("timeout 2")
}, 2000)

let count=0

const intervalId=setInterval(function () {
    count++
    console.log(count)
    if (count === 5) {
        clearInterval(intervalId)
    }
}, 500)

btn1.addEventListener("click",function (e) {
    console.log(e.type)
    console.log(e.target)
})

parent.addEventListener("click",function () {
    console.log("parent")
})

child.addEventListener("click",function () {
    console.log("child")
})

child.addEventListener("click",function (e) {
    e.stopPropagation()
})

list.addEventListener("click",function (e) {
    if (e.target.tagName === "LI") {
        console.log(e.target.textContent)
    }
})

document.addEventListener("keydown",function (e) {
    if (e.ctrlKey && e.key === "s") {
        e.preventDefault()
        console.log("blocked")
    }
})

document.addEventListener("copy",function (e) {
    e.preventDefault()
})

box.addEventListener("touchstart",function () {
    console.log("touch start")
})

box.addEventListener("touchend",function () {
    console.log("touch end")
})

document.addEventListener("visibilitychange",function () {
    if (document.hidden) {
        console.log("hidden")
    } else {
        console.log("visible")
    }
})

window.addEventListener("online",function () {
    console.log("online")
})

window.addEventListener("offline",function () {
    console.log("offline")
})

const customEvent=new Event("custom")

document.addEventListener("custom",function () {
    console.log("custom fired")
})

document.dispatchEvent(customEvent)

const drag=document.getElementById("drag")

if (drag) {
    drag.addEventListener("dragstart",function () {
        console.log("drag start")
    })
    drag.addEventListener("dragend",function () {
        console.log("drag end")
    })
}

window.addEventListener("focus",function () {
    console.log("focus")
})

window.addEventListener("blur",function () {
    console.log("blur")
})

for (let i = 0; i < 20; i++) {
    document.addEventListener("click",function () {
        console.log("global click", i)
    })
}

for (let i = 0; i < 20; i++) {
    setTimeout(function () {
        console.log("loop timeout", i)
    }, i * 100)
}

let timer=0

const interval2=setInterval(function () {
    timer++
    console.log("timer", timer)
    if (timer === 10) {
        clearInterval(interval2)
    }
}, 300)

const inputs=document.querySelectorAll("input")

inputs.forEach(function (el) {
    el.addEventListener("change", function () {
        console.log(el.value)
    })
})
