function sendData(event) {
  event.preventDefault();
  let choice = document.querySelector('select').value;
  fetch("data.php", {
      // Tester le rejet avec une erreur comme getDatass.php
      method: "POST",
      body: choice,
      headers: {
          "Content-Type": "application/text",
      },
  })
      // On récupère la réponse
      .then((response) => {
              if (response.ok) {
                  return response.json();
                }
                return Promise.reject(response); 
      })
      .then()

    }
