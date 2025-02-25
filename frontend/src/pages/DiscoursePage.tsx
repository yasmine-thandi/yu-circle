import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import axios from "axios";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

const API_URL = "http://localhost:5000";

interface Post {
  id: number;
  content: string;
  likes: number;
  liked: boolean;
}

const DiscoursePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get<Post[]>(`${API_URL}/posts`);
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPosts([]);
    }
  };

  const createPost = async () => {
    if (!newPost.trim()) return;
    try {
      await axios.post(`${API_URL}/posts`, { content: newPost });
      setNewPost("");
      fetchPosts();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const deletePost = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/posts/${id}`);
      fetchPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const toggleLikePost = async (id: number, liked: boolean) => {
    try {
      const endpoint = liked ? "unlike" : "like";
      await axios.post(`${API_URL}/posts/${id}/${endpoint}`);
      fetchPosts();
    } catch (error) {
      console.error("Error liking/unliking post:", error);
    }
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Discourse Page</h1>

          <div className="mb-4">
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Write a post..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            ></textarea>
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={createPost}
            >
              Post
            </button>
          </div>

          <input
            className="w-full p-2 border rounded mb-4"
            placeholder="Search posts..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />

          {posts?.length > 0 ? (
            posts
              .filter((post) => post.content.includes(filter))
              .map((post) => (
                <div key={post.id} className="bg-white p-4 rounded shadow mb-4">
                  <p>{post.content}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => toggleLikePost(post.id, post.liked)}
                      className="mr-4 flex items-center"
                    >
                      {post.liked ? (
                        <AiFillLike className="text-blue-500" />
                      ) : (
                        <AiOutlineLike />
                      )}
                      {post.likes}
                    </button>
                    <button
                      onClick={() => deletePost(post.id)}
                      className="text-red-500 flex items-center"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default DiscoursePage;
