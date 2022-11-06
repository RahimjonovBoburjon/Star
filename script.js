const inputs = document.querySelector(".inputs");
const btntrue = document.querySelector(".btntrue");
const subtitle = document.querySelector(".subtitle");


document.body.addEventListener("keypress", (e) => {
    if (e.key == 'Enter') {        
        if (inputs.value == "madina2005") {
            btntrue.classList.remove("none")
            subtitle.textContent = "Correct  password";
        } else {
            subtitle.textContent = "Wrong password";
        }
    }
})