/* exported data */
var $form = document.querySelector('form');
var data = {
  view: 'entry-form',
  entries: [
    {
      image: $form.elements.image.value,
      title: $form.elements.title.value,
      notes: $form.elements.notes.value,
      nextEntryId: 1
    }
  ],
  editing: null,
  nextEntryId: 2
};

var previousData = localStorage.getItem('data-local-storage');
if (previousData !== null) {
  data = JSON.parse(previousData);
}

function handleData(event) {
  var dataEntry = JSON.stringify(data);
  localStorage.setItem('data-local-storage', dataEntry);
}

window.addEventListener('unload', handleData);
