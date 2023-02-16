window.addEventListener("click", function (event){
    let xPosition = event.clientX;
    let yPosition = event.clientY;

    let position  = xPosition + yPosition

    console.log(position)
})

   let interval = setInterval(function() {
   let div = document.getElementById("donkeyTarget");
   div.style.top = div.offsetTop + 4+ "px";
   div.style.left = div.offsetLeft + 4+ "px";   },
   500);

   let bodyWidth = window.innerWidth;
   let bodyHeight = window.innerHeight;
   console.log(bodyWidth)
   console.log(bodyHeight)