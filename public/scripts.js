const URL = "http://localhost:5000/"

fetch(URL + "api/todos").then((response) => {
  if (response.status !== 200) {
    console.log("Ocorreu um erro.");
    return;
  }

  response.json().then((data) => {
    console.log(data);
  });
}).catch((err) => {
  console.log(err);
});
