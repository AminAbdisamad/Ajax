const http = new easyHttp();
//Get post
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, response) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

const data = {
  title: 'Custom post',
  body: 'This is a custom post'
};
//Create Post

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });
//Update Post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});

//Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
