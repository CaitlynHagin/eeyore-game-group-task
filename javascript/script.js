//Esin Saribudak custom cursor codepen
// Cached DOM elements
// Instructions Element
const instructionsEl = document.querySelector(".instructions");
// Custom Cursor Element
const customCursorEl = document.getElementById("custom-cursor");

// Event listener
window.addEventListener("mousemove", (e) => {
  //   Store x and y values of mousemove event
  const x = e.clientX;
  const y = e.clientY;
  //   Update instructions text
  instructionsEl.innerText = `Position: ${x}, ${y}`;
  //   Set coordinates of custom cursor element
  customCursorEl.style.top = `${y}px`;
  customCursorEl.style.left = `${x}px`;
});

// // Esin Saribudak custom cursor codepen

// @prgrx custom cursor codepen
// let div = document.createElement("div");
// div.style.width = "18px";
// div.style.height = "18px";
// div.style.borderRadius = "50%";
// div.style.backgroundColor = "black";
// div.style.position = "absolute"; // <--
// document.body.appendChild(div);

// window.addEventListener("mousemove", function (event) {
//   div.style.left = event.pageX + "px";
//   div.style.top = event.pageY + "px";
// });
// // @prgrx custom cursor codepen
