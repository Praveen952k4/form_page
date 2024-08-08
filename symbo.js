
const scriptURL = 'https://script.google.com/macros/s/AKfycbzEk5OAg4gecN5ldL0pO16Mm-q92CYZ013W9UMYEpKbNagrUSmvrqDJYmyj8aCGKMuq/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
