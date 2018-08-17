document.querySelector('#text').addEventListener('click', getText);
function getText() {
  fetch('data.text')
    .then(res => res.text())
    .then(data => console.log(data));
}

//Fetching Json from local file
document.querySelector('#json').addEventListener('click', getJsonFile);
function getJsonFile() {
  fetch('customer.json')
    .then(response => {
      return response.json();
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

//Fetching  External Github API
document.querySelector('#api').addEventListener('click', externalAPI);
function externalAPI() {
  fetch('https://api.github.com/users')
    .then(response => {
      return response.json();
    })
    .then(data => {
      //   console.log(data);
      let output = '';
      data.forEach(user => {
        output += `<h4>${user.login}</h4>`;
      });
      document.querySelector('#output').innerHTML = output;
    })
    .catch(err => {
      console.log(err);
    });
}
