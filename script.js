function convertTemp() {
    const temp = document.getElementById("tempInput").value;
    const unit = document.getElementById("unit").value;
    const result = document.getElementById("result");
    const sky = document.getElementById("sky");
    const rain = document.getElementById("rain");

    if (temp === "" || isNaN(temp)) {
        result.innerHTML = " Enter a valid number";
        return;
    }

    let celsius;
    const value = parseFloat(temp);

    if (unit === "celsius") celsius = value;
    else if (unit === "fahrenheit") celsius = (value - 32) * 5/9;
    else celsius = value - 273.15;

    
    sky.className = "sky";
    rain.style.display = "none";

    if (celsius >= 30) {
        sky.classList.add("hot");
    } else if (celsius >= 15) {
        sky.classList.add("mild");
    } else {
        sky.classList.add("cold");
        rain.style.display = "block";
    }

    const f = (celsius * 9/5) + 32;
    const k = celsius + 273.15;

    result.innerHTML = `
        ${celsius.toFixed(1)} °C <br>
        ${f.toFixed(1)} °F | ${k.toFixed(1)} K
    `;
}
