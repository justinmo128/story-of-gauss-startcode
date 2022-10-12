// Story of Gauss
let calcBtn = document.getElementById("calc-btn")
calcBtn.addEventListener("click", calcSum);

let sumOut = document.getElementById("sum-out")

function calcSum() {
    // Sum integers 1 to 100
    let n = +document.getElementById("n-in").value;
    document.getElementById("n-out").innerHTML = n;
    sumOut.innerHTML = ((n * (n + 1)) / 2);
}