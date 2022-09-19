// let currentValue = 0

// document.getElementById("increment-btn").addEventListener("click", () => {
//     currentValue = parseInt(document.getElementById("count").innerText) + 1
//     document.getElementById("count").innerText = currentValue
//     console.log(currentValue)
// })

// document.getElementById("save-btn").addEventListener("click", () => {
//     document.getElementById("current-increments").innerText += ` ${currentValue} - `
//     document.getElementById("count").innerText = 0
//     currentValue = 0
//     console.log(currentValue)
// })

let currentValue = 0

function add() {
    currentValue += 1
    const result = document.getElementById("count").textContent = currentValue
    console.log(result)
}

function save() {
    document.getElementById('current-increments').textContent += ` ${currentValue} - `
    document.getElementById("count").textContent = 0
    currentValue = 0
    console.log(currentValue)
}