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
