const validName = "Ann";
const validSurname = "Kuhir";
function onSubmit() {
    const form = document.querySelector('form');
    var formData = new FormData(form);
    const name = formData.get('name');
    const surname = formData.get('surname');
    if (name === validName && surname === validSurname) {
        alert("Welcome, honey (◍•ᴗ•◍)");
        form.style.display = 'none'
    } else {
        alert("Who are you, stranger?");
        form.reset();
    }
}