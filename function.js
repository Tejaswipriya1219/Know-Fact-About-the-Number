let factMsg = document.getElementById("fact")
let userInputEl = document.getElementById("userInput")
let spinnerEl = document.getElementById("spinner")

function numberMessage(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.remove("d-none")
        userEnterNumber = userInputEl.value
        let url = "https://apis.ccbp.in/numbers-fact?number=" + userEnterNumber
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json()
            })
            .then(function(jsonData) {
                spinnerEl.classList.add("d-none")
                factMsg.textContent = jsonData.fact
            })
    }
}

userInputEl.addEventListener("keydown", numberMessage)