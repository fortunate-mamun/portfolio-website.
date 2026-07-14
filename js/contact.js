document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  let form = this;
  let formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      
      Swal.fire({
        title: 'Success!',
        text: 'Email has been sent successfully.',
        icon: 'success',
        color: 'green', 
        showConfirmButton: false,
       timer:1500, 
      });
      form.reset(); 
    }
  });
});