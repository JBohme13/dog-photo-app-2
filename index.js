function getDogPhoto() {
    fetch(`https://dog.ceo/api/breed/${$('input').val()}/images/random`)
      .then(responce => responce.json())
      .then(responceJson =>  displayImages(responceJson))
      .catch(error => alert('Breed not found'))
  }

  function displayImages(responceJson) {
      let jsonStatus = responceJson.status;
      if(jsonStatus === 'success') {
        $('.results').append(`<img src="${responceJson.message}" alt="dog photo">`);
      }
      else if(jsonStatus === 'error') {
        return alert(`${responceJson.message}`)
      };
      console.log(responceJson);
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