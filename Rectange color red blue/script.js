let rectangle = document.getElementById('rectangle');

rectangle.addEventListener('mousemove',(mouse)=>{
    const rect = rectangle.getBoundingClientRect();
    const top = rect.top;
    const left = rect.left;

    const mouseleft = mouse.clientX;
    const mousetop = mouse.clientY;

    if(mouseleft-left<=200){
        const intensity = gsap.utils.mapRange(0, 200, 255, 0, mouseleft-left);
        rectangle.style.backgroundColor = `rgb(${intensity},0,0)`;
    }
    if(mouseleft-left>200){
        const intensity = gsap.utils.mapRange(200, 400, 0, 255, mouseleft - left);
        rectangle.style.backgroundColor = `rgb(0,0,${intensity})`;
    }
});