import Card from "../components/Card";
import { useState, useEffect } from "react";
import { getPosts, addPosts } from "../utils/localStorage.js";
import Modal from "../components/Modal.jsx";
import Button from "../components/Button";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isShowContentModal, setIsShowContentModal] = useState(false);
  const [isAddNewPostModal, setIsAddNewPostModal] = useState(false);

  useEffect(() => {
    const savedPosts = getPosts();

    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      localStorage.removeItem("posts");
      setPosts([]);
    }
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      addPosts(posts);
    } else {
      localStorage.removeItem("posts");
    }
  }, [posts]);

  // Function to add Post
  const addNewPost = (newPost) => {
    setPosts([
      ...posts,
      {
        title: newPost.title,
        imageUrl: newPost.imageUrl,
        content: newPost.content,
      },
    ]);
  };

  const openNewPostModal = () => {
    setIsAddNewPostModal(true);
  };

  const showContent = (e) => {
    console.log(e.target);

    setIsShowContentModal(true);
  };

  return (
    <>
      <h1 className="text-3xl text-center">Our cool diary</h1>

      <Button onClick={openNewPostModal}>Add Post</Button>
      {isAddNewPostModal && (
        <Modal
          isOpen={isShowContentModal}
          onClose={() => setIsAddNewPostModal(false)}
          addNewPost={addNewPost}
        ></Modal>
      )}

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => {
          <Card
            key={index}
            title={post.title}
            imageUrl={post.imageUrl}
            content={post.content}
            onClick={showContent}
            modalState={isShowContentModal}
          />;
        })}
      </div>
    </>
  );
};

export default HomePage;
