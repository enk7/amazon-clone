// display only one image and hide other images

// select all images inside ul -> imgs contain one array that stores all the image elements
const imgs = document.querySelectorAll('.header-slider ul img')
// select control buttons (use querySelector instead of querySelectorAll since we only have 1 prev btn & 1 next btn)
// querySelector: select a single element from the DOM tree, while document. 
// querySelectorAll: select multiple elements from the DOM tree.
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');
// first, we are on the first image (default)
let n = 0;
// select each image and make it display none & make imgs[n] visible
function changeSlide(){
    for (let i = 0; i < imgs.length; i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block'; 
}
changeSlide();

// clicking the prev button -> decrease the value of n (add event e in the arrow function)
prev_btn.addEventListener('click', (e)=>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})
// clicking the next button -> increase the value of n
next_btn.addEventListener('click', (e)=>{
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})

// letting us scroll w/o pressing the shift key
const scrollContainer = document.querySelectorAll('products'); // querySelectorAll stores the array
// remove the default feature when we scroll the mouse wheel and it will scroll the elements horizontally
for (const item of scrollContainer) {
    // addEventListener(): sets up a function that will be called whenever the specified event is delivered to the target
    item.addEventListener('wheel', (evt)=>{
        // preventDefault(): tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be
        evt.preventDefault();
        // Element.scrollLeft: gets or sets the number of pixels by which an element's content is scrolled from its left edge
        // deltaY: returns a positive value when scrolling down, and a negative value when scrolling up, otherwise 0
        item.scrollLeft += evt.deltaY;
    })
}
