const URL = "http://localhost:5000/"

fetch(URL + "api/todos").then((response) => {
  if (response.status !== 200) {
    console.log("Ocorreu um erro.");
    return;
  }

  response.json().then((data) => {
    renderElements(data);
  });
}).catch((err) => {
  console.log(err);
});

function renderElements(listElements) {
  itemsList.innerHTML = '';

  for (element of listElements) {
    const liNode = document.createElement('li');
    const liNodeText = document.createTextNode(element.task);

    const input = document.createElement('input');
    input.setAttribute("type", "hidden");
    input.value = element.id;
  
    let h3 = document.createElement('h3');
    h3.appendChild(liNodeText);
    
    //Create a delete button
    let btnDelete = document.createElement('button');
    btnDelete.textContent = 'Apagar';
    btnDelete.addEventListener('click', (event) => {
      deleteTask(input.value)
    });

    liNode.appendChild(h3);
    liNode.appendChild(btnDelete);
    itemsList.appendChild(liNode);
    
  }
  
}


function deleteTask(idTask) {
  fetch(URL + `api/delete-task?id=${idTask}`).then((response) => {
    if (response.status !== 200) {
      console.log("Ocorreu um erro.");
      return;
    }
  }).catch((err) => {
    console.log(err);
  });
  
  location.reload();
}
