const http = new easyHttp();
/** GET Request */
http
  .get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));

/** POST Request */
const data = {
  name: 'Amin Abdisamd',
  username: 'Aminux',
  email: 'aminux@gmail.com'
};
http
  .post('https://jsonplaceholder.typicode.com/users', data)
  .then(res => console.log(res))
  .catch(err => console.log(err));

/** PUT Request */
const data1 = {
  name: 'Hassan Amin',
  username: 'hass',
  email: 'hass@gmail.com'
};
http
  .put('https://jsonplaceholder.typicode.com/users/1', data1)
  .then(res => console.log(res))
  .catch(err => console.log(err));

/** DELETE Request */
http
  .delete('https://jsonplaceholder.typicode.com/users/1')
  .then(res => console.log(res))
  .catch(err => console.log(err));
