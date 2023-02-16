window.addEventListener("click", function (event){
    let xPosition = event.clientX;
    let yPosition = event.clientY;

    let position  = xPosition + yPosition

    console.log(position)
})