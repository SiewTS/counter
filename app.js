// initial value
let count = 0;
// value on screen
let value = document.getElementById("value");

// Multiple Events Listener Method
// buttons
// const decreasebtn = document.getElementById("decrease");
// const resetbtn = document.getElementById("reset");
// const increasebtn = document.getElementById("increase");

// decreasebtn.addEventListener("click", function(){
//     count --;
//     value.innerText = count;
// });
// resetbtn.addEventListener("click", function(){
//     count = 0;
//     value.textContent = count;
// });
// increasebtn.addEventListener("click", function(){
//     count ++;
//     value.innerHTML = count;
// });

// One Event Listener Method
const btns = document.querySelectorAll(".btn-container__btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.getAttribute("id");
        // console.log(e.currentTarget.attributes);

        if (styles === "decrease") {
            // setting byvalue as global variable doesn't work
            let byvalue = Number(document.getElementById("dein-input").value);
            if (byvalue != "") {
                count -= byvalue;
                console.log(count);
                console.log(typeof count);
            } else {
                count--;
            }
        } else if (styles === "increase") {
            // addition won't sum without have Number conversion
            // the value got from input is of type number but the value is different
            // rather than giving 6 while sum, it gives 06, why?
            let byvalue = Number(document.getElementById("dein-input").value);
            if (byvalue != "") {
                count += byvalue;
                console.log(count);
                console.log(document.getElementById("dein-input").type);
            } else {
                count++;
            }
        } else {
            count = 0;
        }
        // Set color on value
        if (count < 0) {
            value.style.color = "#ff0000";
        }
        if (count > 0) {
            value.style.color = "#00ff00";
        }
        if (count == 0) {
            value.style.color = "#4b4b4b";
        }
        value.innerText = count;
    });
});

// Reset input value when page refresh
window.onload = resetValue();
function resetValue() {
    document.getElementById("dein-input").value = "";
}
