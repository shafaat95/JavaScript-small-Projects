const getColor = () => {
    // Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16).padStart(6,'0');

    const colorCode = document.querySelector("#color-code");
    colorCode.innerText = randomCode;
    document.body.style.backgroundColor = randomCode;
}

document.querySelector("#btn").addEventListener("click", 
    getColor
)