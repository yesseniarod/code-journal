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

  entry.entryId = data.nextEntryId;
  data.nextEntryId++;

  data.entries.unshift(entry);
  $ul.prepend(entriesList(entry));
  $form.reset();
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
}

$form.addEventListener('submit', inputEntry);

function entriesList(entry) {
  var $parentDiv = document.createElement('div');
  $parentDiv.setAttribute('class', 'row');

  var $li = document.createElement('li');
  $li.setAttribute('data-entry-id', entry.entryId);
  $parentDiv.appendChild($li);

  var $div = document.createElement('div');
  $div.setAttribute('class', 'column-half');
  $li.appendChild($div);

  var $imageEntry = document.createElement('img');
  $imageEntry.setAttribute('src', entry.image);
  $div.appendChild($imageEntry);

  var $otherDiv = document.createElement('div');
  $otherDiv.setAttribute('class', 'column-half');
  $li.appendChild($otherDiv);

  var $h2 = document.createElement('h2');
  $h2.setAttribute('class', 'title');
  $h2.textContent = entry.title;
  $otherDiv.appendChild($h2);

  var $icon = document.createElement('i');
  $icon.setAttribute('class', 'fas fa-pen');
  $otherDiv.appendChild($icon);

  var $p = document.createElement('p');
  $p.setAttribute('class', 'notes');
  $p.textContent = entry.notes;
  $otherDiv.appendChild($p);

  return $parentDiv;
}

var $ul = document.querySelector('ul');

function addEntries(event) {
  for (var i = 0; i < data.entries.length; i++) {
    var entryJournal = entriesList(data.entries[i]);
    $ul.appendChild(entryJournal);
  }

}

document.addEventListener('DOMContentLoaded', addEntries);

var $new = document.querySelector('.new');
var $dataViewForm = document.querySelector('[data-view]');
var $mainH1 = document.querySelector('h1');
var $topPageDiv = document.querySelector('.top-page');
var $dataViewEntries = document.querySelector('#entries');
var $entries = document.querySelector('.entriesHeader');

function newEntry(event) {
  if (event.target.matches('.new')) {
    $dataViewForm.removeAttribute('class');
    $mainH1.removeAttribute('class');
    $topPageDiv.className = 'hidden';
    $dataViewEntries.className = 'hidden';
  }
}
$new.addEventListener('click', newEntry);

var $button = document.querySelector('button');

function viewEntry(event) {
  if (event.target.matches('.entriesHeader') || event.target.matches('button')) {
    $dataViewForm.className = 'hidden';
    $mainH1.className = 'hidden';
    $topPageDiv.className = 'top-page';
    $dataViewEntries.removeAttribute('class');

  }
}

$entries.addEventListener('click', viewEntry);
$button.addEventListener('click', viewEntry);

// $ul.addEventListener('click', function (event) {

// })
