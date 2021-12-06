var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");

// console.log(css);
// console.log(color1);
// console.log(color2);

// Color to be used in my next project
//  linear-gradient(to right, rgb(122, 58, 156), rgb(195, 151, 154));

function changeGradient() {
   body.style.background = "linear-gradient(to right, " + color1.value + "," +  color2.value + ") ";
   css.textContent = body.style.background + ";";
}

color1.addEventListener("input", changeGradient);

color2.addEventListener("input", changeGradient);