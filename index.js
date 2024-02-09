const follower = document.getElementsByClassName('circle')[0]

var z = .001
let mouse = {x: 0, y: 0}
let followerPosition = {x: 0, y: 0}
let dist = 0
let first = true

const max = Math.sqrt(window.width**2+window.height**2)

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x
    mouse.y = e.y
    if(first){
        follower.style.visibility = 'visible'
        followerPosition.x = mouse.x
        followerPosition.y = mouse.y
        first = !first
    }
    moveFollower()
})
function moveFollower(){
    let transformation = {x: 0, y: 0}
    
    transformation.x = mouse.x - followerPosition.x
    transformation.y = mouse.y - followerPosition.y

    followerPosition.x += transformation.x*z
    followerPosition.y += transformation.y*z

    let width = Math.abs(transformation.x/window.innerWidth)
    let height = Math.abs(transformation.y/window.innerHeight)

    // console.log(width)

    dist = Math.min(width+height*2, .5)

    follower.style.transform = `translate(${followerPosition.x}px, ${followerPosition.y}px)`
    follower.style.transform += `rotate(${Math.atan(transformation.x/transformation.y)*-180/Math.PI}deg)`
    follower.style.transform += `scale(${1-dist}, ${1+dist})`

    window.requestAnimationFrame(moveFollower)
}