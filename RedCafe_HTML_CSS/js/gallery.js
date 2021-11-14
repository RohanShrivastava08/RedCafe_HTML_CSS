// GALLERY.JS
// JavaScript file to create gallery interactive 
// openModal function that displays gallery container within a block positioning display
function openModal() {
    document.getElementById("myModal").style.display = "block";
}
// closeModal function provides no block positioning display
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
// set slideIndex to 1 for the first image within the image slider
let slideIndex = 1;
showSlides(slideIndex); // call show slides function
// function moves to the next image in the slider 
function plusSlides(n) {
    showSlides(slideIndex += n); // call show slides function
}
// function shows current image as per the slideIndex variable in the image slider 
function currentSlide(n) {
    showSlides(slideIndex = n); // call show slides function
}
// function displays the image that is adjacent to the number of slideIndex 
function showSlides(n) { // parameter is slideIndex  
    let i; // initialise i
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    // initialise a variable
    for (i = 0; i < slides.length; i++) { // for loop over number of images
    slides[i].style.display = "none"; // no positioning of image
    }
    slides[slideIndex-1].style.display = "block"; // block positioning of image
}