fetch('https://mzunta.netlify.app/.netlify/functions/api/endpoint')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));