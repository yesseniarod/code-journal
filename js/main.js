/* global data */
/* exported data */
var $inputUrl = document.querySelector('input');
var $image = document.querySelector('img');
// var $value = $inputUrl.value;

function addImage(event) {
  // var updateImage =
  $image.setAttribute('src', 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213218/German-Shepherd-on-White-00.jpg');
}

$inputUrl.addEventListener('input', addImage);