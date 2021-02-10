/* exported data */
var data = {
  view: 'entry-form',
  entries: [],
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
