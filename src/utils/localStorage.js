function addPosts(posts) {
  localStorage.setItem("posts", JSON.stringify(posts));
}
function getPosts() {
  return localStorage.getItem("posts")
    ? JSON.parse(localStorage.getItem("posts"))
    : [];
}

export { addPosts, getPosts };
