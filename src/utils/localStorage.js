function addPosts(posts) {
  localStorage.setItem("posts", JSON.stringify(posts));
}
function getPosts() {
  localStorage.getItem("posts") || [];
}

export { addPosts, getPosts };
