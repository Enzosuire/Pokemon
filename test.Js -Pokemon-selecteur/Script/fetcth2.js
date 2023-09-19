function sendData() {
  let choice = document.querySelector('select[name="pokemon"]:checked').value;
  fetch("./php/data.php", {
      // Tester le rejet avec une erreur comme getDatass.php
      method: "POST",
      body: "Pikachu",
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
