  const scriptURL = 'https://script.google.com/macros/s/AKfycbwtuyjM2qVQCZxZxQp_PU7MpL6cZz6Miat8pvSIj8ZdDWwXwGIMuAzF4TZzgMKdy2mR5g/exec'

  const form = document.forms['submit-to-google-sheet']

  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
         msg.innerHTML = "Thank You For Subscribing!"
         setTimeout(function(){
            msg.innerHTML = "";
         },5000)
         form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
