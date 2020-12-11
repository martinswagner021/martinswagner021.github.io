document.addEventListener("DOMContentLoaded", ()=>{
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    const button = document.querySelectorAll("button");
    
    

    //resizing
    canvas.height = window.innerHeight - 100;
    canvas.width = window.innerWidth;
    function resizing () {
    canvas.height = window.innerHeight - 100;
    canvas.width = window.innerWidth;
    }
    window.addEventListener("resize", resizing)

    //var
    let painting = false;

    function startPainting(){
        painting = true;
        ctx.beginPath();
    }
    function endPainting(){
        painting = false;
        ctx.beginPath();
    }
    function draw(e){
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
    }
    //select color
    document.querySelector('.red').onclick = () => {ctx.strokeStyle = 'red'}
    document.querySelector('.blue').onclick = () => {ctx.strokeStyle = 'blue'}
    document.querySelector('.yellow').onclick = () => {ctx.strokeStyle = 'yellow'}
    document.querySelector('.green').onclick = () => {ctx.strokeStyle = 'green'}
    document.querySelector('.black').onclick = () => {ctx.strokeStyle = 'black'}
    document.querySelector('.brown').onclick = () => {ctx.strokeStyle = 'brown'}
    
    //eventlisteners
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", endPainting);
    canvas.addEventListener("mousemove", draw);
})