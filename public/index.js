// const incrementBtn = document.getElementById("increment");
// const decrementBtn = document.getElementById("decrement");
// const resetBtn = document.getElementById("reset");


const countText = document.getElementById("count_value");
const buttons = document.querySelectorAll(".btn");
let count = Number(countText.textContent);
const initialValue = count;
function counter(e) {
    switch (e.target.id) {

        case "increment":
            count++; break;

        case "decrement":
            count--; break;
        case "reset":
            count = initialValue; break;
        default: console.log("nothing");

    }
    countText.textContent = count;
    if (count < 0) { countText.classList.add("text-error"); }
    else { countText.classList.remove("text-error"); }

}

buttons.forEach((btn) => {
    btn.addEventListener("click", counter)
})



// incrementBtn.addEventListener("click",  counter)
// decrementBtn.addEventListener("click", counter)
// resetBtn.addEventListener("click",  counter)