import { useState, useEffect } from "react";
import { getPosts, addPosts } from "../utils/localStorage.js";
import Button from "../components/Button";
import Modal from "../components/Modal.jsx";
import Card from "../components/Card.jsx";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const [isAddNewPostModal, setIsAddNewPostModal] = useState(false);

  useEffect(() => {
    const savedPosts = getPosts();
    setPosts(savedPosts);
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      addPosts(posts);
    }
  }, [posts]);

  // Function to add Post
  const addNewPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);

    setIsAddNewPostModal(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">My Personal Diary</h1>

      <div className="flex justify-center">
        <Button onClick={() => setIsAddNewPostModal(true)}></Button>
      </div>

      {isAddNewPostModal && (
        <Modal
          onClose={() => setIsAddNewPostModal(false)}
          addNewPost={addNewPost}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {posts.map((post, index) => (
          <Card
            key={index}
            title={post.title}
            imageUrl={post.imageUrl}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
