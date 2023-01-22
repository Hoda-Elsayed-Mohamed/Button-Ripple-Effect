const rippleBtn = document.querySelector('.btn')

rippleBtn.addEventListener('click', (e)=>{

    const x = e.clientX
    const y = e.clientY

    const buttonX = e.target.offsetLeft
    const buttonY = e.target.offsetTop

    const clickedSpotX = x - buttonX
    const clickedSpotY = y - buttonY

    const circle = document.createElement('span')
    circle.classList.add('ripple')
   
    circle.style.left = clickedSpotX+"px"
    circle.style.top = clickedSpotY+"px"

    rippleBtn.appendChild(circle)
    
})