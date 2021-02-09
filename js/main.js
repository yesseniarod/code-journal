/* global data */
/* exported data */
var $inputUrl = document.querySelector('input');
var $image = document.querySelector('img');
var $form = document.querySelector('form');
// console.log($inputUrl.value.length);

function addImage(event) {

  if ($inputUrl.value.length !== 0) {
    $image.setAttribute('src', $form.elements.image.value);
  } else {
    $image.setAttribute('src', './images/placeholder-image-square.jpg');
  }
}

$inputUrl.addEventListener('input', addImage);

function inputEntry(event) {
  event.preventDefault();
  var entry = {
    image: $form.elements.image.value,
    title: $form.elements.title.value,
    notes: $form.elements.notes.value
  };
  entry.nextEntryId = 1;
}

$form.addEventListener('submit', inputEntry);
