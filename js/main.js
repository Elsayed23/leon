let bars = document.querySelector(".links");
let links = document.styleSheets[1].cssRules[18];
let FB = document.querySelector(".links .icons span:nth-child(1)")
let cenB = document.querySelector(".links .icons span:nth-child(2)")
let LB = document.querySelector(".links .icons span:nth-child(3)")


bars.addEventListener("click", () => {
    if (links.style.opacity === "0") {
        links.style.opacity = "1";
        cenB.style.cssText = "opacity: 0;margin-bottom: 0;";
        FB.style.cssText = "transform: translateY(100%) rotate(45deg);margin-bottom: 0;";
        LB.style.cssText = "transform: rotate(-45deg);margin-bottom: 0px;"
    } else {
        links.style.opacity = "0";
        cenB.style.cssText = "opacity: 1;margin-bottom: 6px;";
        FB.style.cssText = "transform: translateY(0) rotate(0);margin-bottom: 6px;";
        LB.style.cssText = "transform: rotate(0);margin-bottom: 6px;"
    }
});