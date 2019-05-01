function getDogPhoto() {
    fetch(`https://dog.ceo/api/breed/${$('input').val()}/images/random`)
      .then(responce => responce.json())
      .then(responceJson =>  displayImages(responceJson))
      .catch(error => alert('Breed not found'))
  }

  function displayImages(responceJson) {
      console.log(responceJson);
        $('.results').append(`<img src="${responceJson.message}">`);
  }
  
  function watchSubmit() {
      $('.form').submit(event => {
          event.preventDefault();
              getDogPhoto();
       });
  }
  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    watchSubmit();
  });