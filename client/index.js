const input = document.querySelector(".input")
const btn = document.querySelector(".button")


btn.addEventListener("click", function() {
    clearP()
if (input.value == "") {
    const p = document.createElement("p")
    p.className = "error error1"
    p.textContent = "No email entered."
    const container = input.parentElement
    container.insertBefore(p, input.nextSibling)// There is no insertAfter method, to achieve this you have to use the insertBefore method tied with element.nextSibling. Here I am getting the error message to come after the input.
} else if (input.value.includes("@")){
    return(true) 
} else {
    
    const p = document.createElement("p")
    p.className = "error error2"
    p.textContent = "Invalid email address."

    const container = input.parentElement
    container.insertBefore(p, input.nextSibling)
}
clearInput()
})


function clearInput() {
    input.value = ""
}

function clearP() {
    input.addEventListener("click", function() {
    const container = input.parentElement;
    const error1 = container.querySelector(".error1");
    const error2 = container.querySelector(".error2")

    if (error1) {
        error1.remove()
    } else {
        error2.remove()
    }
})


  }
  