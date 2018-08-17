// Create posts
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

// create post
function createPosts(post) {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}

// Get posts
function getPost() {
  setTimeout(() => {
    let output = '';
    posts.forEach(function(post) {
      output += `
        <li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
createPosts({ title: 'Post Three', body: 'This is post Three' });
getPost();

function createPosts(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
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
createPosts({ title: 'Post Three', body: 'This is Post Three' }, getPosts);
// getPosts();
