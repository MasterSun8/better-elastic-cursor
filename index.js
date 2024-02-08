const follower = document.getElementsByClassName('circle')[0]

const z = 100
const mouse = {x: 0, y: 0}
const transformation = {x: 0, y: 0}
const followerPosition = {x: 0, y: 0}
let dist = 0
let first = true

const max = Math.sqrt(window.width**2+window.height**2)

window.addEventListener('mousemove', (e) => {
    follower.style.visibility = 'visible'
    mouse.x = e.x
    mouse.y = e.y
    if(first){
        transformation.x, followerPosition.x = mouse.x
        transformation.y, followerPosition.y = mouse.y
        first = !first
    }
    moveFollower()
})
function moveFollower(){
    
    transformation.x = mouse.x - followerPosition.x
    transformation.y = mouse.y - followerPosition.y

    followerPosition.x += transformation.x/z
    followerPosition.y += transformation.y/z

    let width = Math.abs(transformation.x/window.innerWidth)
    let height = Math.abs(transformation.y/window.innerHeight)

    // console.log(width)

    dist = width+height

    follower.style.transform = `translate(${followerPosition.x}px, ${followerPosition.y}px)`
    follower.style.transform += `rotate(${Math.atan(transformation.x/transformation.y)*-180/Math.PI}deg)`
    // follower.style.transform += `scale(${1-dist}, ${1+dist})`

    window.requestAnimationFrame(moveFollower)
}