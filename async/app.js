// function xml() {
//   return 'Hello';
// }
// console.log(xml());
async function xml(n) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello ' + n), 1000);
  });
  const error = false;
  if (!error) {
    const res = await promise;
    return res;
  } else {
    await Promise.reject(new Error('Something went wrong!'));
  }
}
xml('Aminux')
  .then(res => res)
  .catch(err => err);

//get API using async & await
async function getUsers(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
getUsers('https://jsonplaceholder.typicode.com/users').then(data =>
  console.log(data)
);
