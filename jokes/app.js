//http://api.icndb.com/jokes/random/3

document.querySelector('#findJoke').addEventListener('click', norrisJoke);

//function for norris jokes
function norrisJoke(e) {
  const numberOfJokes = document.querySelector('#No_jokes').value;
  const displayJokes = document.querySelector('#displayJokes');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);
  xhr.onload = function() {
    if (this.status === 200) {
      const theJokes = JSON.parse(this.responseText);
      let output = '';
      console.log(theJokes);
      if (theJokes.type === 'success') {
        theJokes.value.forEach(joke => {
          output += `${joke.joke} <br><br>`;
        });
      } else {
        output += 'Something went wrong';
      }
      displayJokes.innerHTML = output;
    }
  };
  xhr.send();
  e.preventDefault();
}
