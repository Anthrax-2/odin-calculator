"use strict"

let x = null
let y = null
let op = null

const outputScreen = document.querySelector("#output")
const buttons = document.querySelector(".buttons")

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b !== 0) {
        return a / b
    }
    return "ERROR!"
}

function operate(a, b, operation) {
    switch (operation) {
        case "+":
            return add(a, b)
        case "-":
            return subtract(a, b)
        case "*":
            return multiply(a, b)
        case "/":
            return divide(a, b)
    }
}

const chars = "0123456789"

const operators = document.querySelectorAll(".operator")
const equal = document.querySelector("#equal")

let equalPressed = false

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        if (outputScreen.value !== "") {
            x = parseFloat(outputScreen.value)
            op = event.target.textContent
            outputScreen.value = ""
        } else return
    })
})

equal.addEventListener("click", () => {
    equalPressed = true
    if (outputScreen.value !== "" && x) {
        y = parseFloat(outputScreen.value)
        outputScreen.value = Math.round(operate(x, y, op) * 1000000) / 1000000
    }
})

buttons.addEventListener("click", (event) => {
    if (chars.includes(event.target.textContent)) {
        if (equalPressed) {
            outputScreen.value = event.target.textContent
            equalPressed = false
        } else {
            outputScreen.value += event.target.textContent
        }
    } 
    if (event.target.textContent === "." && !outputScreen.value.includes(".")) {
        outputScreen.value += event.target.textContent
    } else { 
        return
    }
})

const clearBtn = document.querySelector("#clear")
clearBtn.addEventListener("click", clear)

const backspaceBtn = document.querySelector("#backspace")
backspaceBtn.addEventListener("click", backspace)

function clear() {
    outputScreen.value = ""
}

function backspace() {
    const newOutput = outputScreen.value.slice(0, -1)
    outputScreen.value = newOutput
}


