import Button from "./Button";
import { useState } from "react";
import { addPosts } from "../utils/localStorage.js";

const Modal = (props) => {
  const [postData, setPostData] = useState({
    title: "",
    imageUrl: "",
    content: "",
  });

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

    const postData = {
      title: e.target[0].value,
      imageUrl: e.target[1].value,
      content: e.target[2].value,
    };

    setPostData(postData);
    console.log("submitting", postData);
  }

  // Function to add toDo
  const addToDo = (newToDo) => {
    setTodos([...todos, { text: newToDo, done: false }]);
  };

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
