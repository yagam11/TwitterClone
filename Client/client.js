const form = document.querySelector('form')
const loadingElement = document.querySelector('.loading');
const API_URL = 'http://localhost:8000/tweet';

//loading initially none
loadingElement.style.display = 'none';

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const content = formData.get('content');

  const tweet = {
    //object--inside the curly bracket
    name,
    content
  }
  console.log(tweet);
  //form => none
  form.style.display = 'none';
  loadingElement.style.display = '';

  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(tweet),
    headers: {
      'content-type': 'application/json'
    }
  });
})