// Your code goes here

// mouseover 'Fun Bus' (first h1), change background color to dodgerblue
let name = document.querySelector('h1');
name.addEventListener('mouseover', e => {
    document.body.style.backgroundColor = 'dodgerBlue';
})

//click body anywhere, changes text color to purple
let bodyclick = document.querySelector("body");
bodyclick.addEventListener("click", e => {
    document.body.style.color = "purple";
})
// bodyclick.removeEventListener('dblclick', e => {
//     document.body.style.color = 'black';
// })

// double click bus image to change background color to limegreen
let busPic = document.querySelector('img');
busPic.addEventListener('dblclick', e => {
    document.body.style.backgroundColor = 'limegreen'
})
//bus image mouse enter to background red
busPic.addEventListener('mouseenter', e => {
    document.body.style.backgroundColor = '#ff3633'
})
// bus img mouse out to background orange
busPic.addEventListener('mouseout', e => {
    document.body.style.backgroundColor = '#ff970f'
})


//move mouse to 'welcome to Fun Bus, to make background black
let move = document.querySelector('h2');
move.addEventListener('mousemove', e => {
    document.body.style.backgroundColor = 'black'
})
//drag nav to change color to turquise
let drg = document.querySelector('nav');
drg.addEventListener('drag', e => {
    document.body.style.backgroundColor = '#33f5ff'
})

let navMov = document.querySelector('nav');
navMov.addEventListener('mousedown', e => {
    document.body.style.backgroundColor = 'indian red'
})

navMov.addEventListener('mouseup', e => {
    document.body.style.backgroundColor = 'grey'
})

//stop home from going to link
document.querySelector("a").addEventListener("click", function(event) {
    event.preventDefault()
})