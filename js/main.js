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
  var entry = {
    image: $form.elements.image.value,
    title: $form.elements.title.value,
    notes: $form.elements.notes.value
  };

  entry.nextEntryId = data.entries.length;

  data.entries.unshift(entry);

  $form.reset();
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
}

$form.addEventListener('submit', inputEntry);

// var previousEntry = localStorage.getItem('entry-local-storage');
// if (previousEntry !== null) {
//  entry = JSON.parse(previousEntry);
// }

// function handleInput(event) {
//  var inputEntry = JSON.stringify(entry);
//  localStorage.setItem('entry-local-storage', inputEntry);
// }

// window.addEventListener('beforeunload', handleInput);
