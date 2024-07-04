function addNote() {
    const input = document.getElementById('noteInput');
    const noteText = input.value;

    if (noteText.trim() !== "") {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';

        const notePara = document.createElement('p');
        notePara.textContent = noteText;
        noteDiv.appendChild(notePara);

        const noteTime = document.createElement('p');
        noteTime.className = 'note-time';
        noteTime.textContent = new Date().toLocaleTimeString();
        noteDiv.appendChild(noteTime);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '✖';
        deleteBtn.onclick = function() {
            noteDiv.remove();
        };
        noteDiv.appendChild(deleteBtn);

        document.getElementById('notes').appendChild(noteDiv);
        input.value = '';
    }
}
