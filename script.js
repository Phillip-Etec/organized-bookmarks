const myModal = document.getElementById('addBookmarkModal')
const myInput = document.getElementById('inputAddUrl')

myModal.addEventListener('show.bs.modal', () => {
  myInput.focus();
})


window.addEventListener('keydown', (event) => {
		if(event.code === 'keyA' && event.ctrlKey) {

		}
	}
);
