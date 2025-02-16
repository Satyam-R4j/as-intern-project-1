import { useState } from "react";
import { usePosts } from "../services/api";
import PostCard from "../components/PostCard";
import Modal from "../components/Modal";
import { Post } from "../types";
const Home = () => {
  const { data: posts = [], isLoading, error } = usePosts();

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts: {error.message}</p>;

  return (
    <div className="md:p-24 text-white p-10  ">
      <h1 className="text-2xl font-bold mb-4 mt-20 ">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <>
            <PostCard
              key={post.id}
              post={post}
              onClick={() => setSelectedPost(post)}
            />
          </>
        ))}
      </div>

      {selectedPost && (
        <Modal onClose={() => setSelectedPost(null)}>
          <h2 className="text-xl font-bold">{selectedPost.title}</h2>
          <p>{selectedPost.body}</p>
        </Modal>
      )}
    </div>
  );
};

export default Home;
