const Modal = ({ addNewPost }) => {
  function handleSubmit(e) {
    e.preventDefault();

    if (
      e.target[0].value === "" ||
      e.target[1].value === "" ||
      e.target[2].value === ""
    ) {
      alert("Please fill in all fields!");
      return;
    }

    const newPostData = {
      title: e.target[0].value,
      imageUrl: e.target[1].value,
      content: e.target[2].value,
    };

    console.log("submitting", newPostData);
    addNewPost(newPostData);
    e.target.reset();
  }

  return (
    <form action="#" method="post" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input name="title" type="text" placeholder="Title" />

      <label htmlFor="imageUrl">Image URL</label>
      <input
        name="imageUrl"
        type="text"
        placeholder="https://picsum.photos/id/237/200/300"
      />

      <label htmlFor="content">Content</label>
      <textarea
        name="content"
        rows="4"
        cols="50"
        placeholder="Some text..."
      ></textarea>
      <button type="submit">Save Post</button>
    </form>
  );
};

export default Modal;
