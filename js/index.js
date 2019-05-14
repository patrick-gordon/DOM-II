// Your code goes here

// mouseover 'Fun Bus' (first h1), change background color to dodgerblue
let name = document.querySelector('h1');
name.addEventListener('mouseover', a => {
    document.body.style.backgroundColor = 'dodgerBlue';
})

//click body anywhere, changes text color to purple
let bodyclick = document.querySelector("body");
bodyclick.addEventListener("click", a => {
    document.body.style.color = "purple";
})

// double click bus image to change background color to limegreen
let doubleClick = document.querySelector('img');
doubleClick.addEventListener('dblclick', a => {
    document.body.style.backgroundColor = 'limegreen'
})