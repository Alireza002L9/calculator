const buttons = document.querySelectorAll("input");
const display = document.getElementById("result");
const equal = document.getElementById("equal");

function clicked(e) {
    const value = e.target.value;
    if (value === "C") {
        display.value = "";
    } else {
        display.value += value;
    }
}

buttons.forEach((item) => {
    item.addEventListener("click", clicked);
});

equal.addEventListener("click", () => {
    const resultV = eval(display.value)
    display.value = resultV
});
