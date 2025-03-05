import { useState, useEffect } from "react";
import { getPosts, addPosts } from "../utils/localStorage.js";
import Button from "../components/Button";
import AddPostModal from "../components/AddPostModal.jsx";
import Card from "../components/Card.jsx";
import FullContentModal from "../components/FullContentModal.jsx";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isAddNewPostModal, setIsAddNewPostModal] = useState(false);
  const [isFullContentModal, setIsFullContentModal] = useState(false);
  const [showFullContent, setShowFullContent] = useState({});

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

  const showContent = (post) => {
    setShowFullContent(post);
    setIsFullContentModal(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">My Personal Diary</h1>

      <div className="flex justify-center">
        <Button onClick={() => setIsAddNewPostModal(true)}></Button>
      </div>

      {isAddNewPostModal && (
        <AddPostModal
          onClose={() => setIsAddNewPostModal(false)}
          addNewPost={addNewPost}
          posts={posts}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {posts.map((post) => (
          <>
            <Card
              key={post.date}
              title={post.title}
              imageUrl={post.imageUrl}
              content={post.content}
              onClick={() => {
                showContent(post);
              }}
              date={post.date}
            />
          </>
        ))}
        {isFullContentModal && (
          <FullContentModal
            postData={showFullContent}
            onClose={() => setIsFullContentModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
