var txtUser = document.querySelector('#txtUser');
var buttonElement = document.querySelector('#button');
var listElement = document.querySelector('.list');

function carregando() {
  listElement.innerHTML = '';
  let newElement = document.createElement('li');
  let textElement = document.createTextNode("Carregando...");
  newElement.appendChild(textElement);
  listElement.appendChild(newElement);
}

function adicionar(array) {
  listElement.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    let newElement = document.createElement('li');
    let textElement = document.createTextNode(array[i].name);
    newElement.appendChild(textElement);
    listElement.appendChild(newElement);
  }
}

function pesquisar(userGitHub) {
  carregando();
  userGitHub = txtUser.value;
  axios.get('https://api.github.com/users/' + userGitHub + '/repos')
    .then(function (response) {
      adicionar(response.data);
    })
    .catch(function (error) {
      console.log(error);
      listElement.innerHTML = '';
      alert(`O usuário não existe!`);
    });
}
