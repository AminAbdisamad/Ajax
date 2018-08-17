// Create posts
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

function createPosts(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const err = false;
      posts.push(post);
      if (err) {
        reject('Error: Something went wrong');
      } else {
        resolve();
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach(post => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
createPosts({ title: 'Post Three', body: 'This is Post Three' })
  .then(getPosts)
  .catch(err => {
    console.log(err);
  });
// getPosts();
