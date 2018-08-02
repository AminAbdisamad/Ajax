const text = document.querySelector('p');
document.querySelector('button').addEventListener('click', LoadData);
function LoadData() {
  //Initialize XHR

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.txt', true);
  xhr.onload = function() {
    if (this.status == 200) {
      text.innerHTML = this.responseText;
    }
  };
  xhr.send();
}
