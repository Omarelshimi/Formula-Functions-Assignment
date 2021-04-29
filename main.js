// Variables
let InV = document.getElementById("initialVelocity");
let FnV = document.getElementById("finalVelocity");
let tm = document.getElementById("time");
let button = document.getElementById("btn");
let ans = document.getElementById("answer");

// Event listener that runs a function
button.addEventListener("click", buttonClickHandler);

//Output
function buttonClickHandler() {
    // Get inputs
    let i = +InV.value;
    let f = +FnV.value;
    let t = +tm.value;
    ans.innerHTML = accel(i, f, t);
}

// Calculation
function accel(i, f, t) {
    let a = (f - i) / t;
    return a;
}