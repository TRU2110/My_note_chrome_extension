document.addEventListener('DOMContentLoaded', function () {
  const noteTextarea = document.getElementById('noteTextarea');
  const saveBtn = document.getElementById('saveBtn');
  const notesList = document.getElementById('notesList');

  saveBtn.addEventListener('click', function () {
    const noteText = noteTextarea.value.trim();
    if (noteText !== '') {
      const noteElement = document.createElement('div');
      noteElement.textContent = noteText;
      notesList.appendChild(noteElement);
      noteTextarea.value = '';
    }
  });
});
