let currentValue = 0



document.getElementById("increment-btn").addEventListener("click", () => {
    currentValue = parseInt(document.getElementById("count").innerText) + 1
    document.getElementById("count").innerText = currentValue
    console.log(currentValue)
})

document.getElementById("save-btn").addEventListener("click", () => {
    document.getElementById("current-value").innerText += ` ${currentValue} - `
    document.getElementById("count").innerText = 0
    currentValue = 0
    console.log(currentValue)
})
