/* global data */
/* exported data */
var $inputUrl = document.querySelector('input');
var $image = document.querySelector('img');
var $form = document.querySelector('form');

function addImage(event) {
  $image.setAttribute('src', $form.elements.image.value);
}

$inputUrl.addEventListener('input', addImage);

function inputEntry(event) {
  event.preventDefault();
  // var entry = {
  //  image: $form.elements.image.value,
  //  title: $form.elements.title.value,
  //  notes: $form.elements.notes.value,
  //  nextEntryId : 1
  // };

}

$form.addEventListener('submit', inputEntry);
