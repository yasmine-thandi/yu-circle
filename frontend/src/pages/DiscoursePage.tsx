import React, { useState } from "react";
import Header from "../components/Header/Header";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

interface Comment {
  id: number;
  content: string;
  likes: number;
  liked: boolean;
}

interface Post {
  id: number;
  content: string;
  likes: number;
  liked: boolean;
  comments: Comment[];
}

const DiscoursePage: React.FC = () => {
  // Start with two fake posts in local state
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      content:
        "Hi I am looking for a mentor to study for my EECS 2011 with! Is anyone intrested?",
      likes: 0,
      liked: false,
      comments: [
        {
          id: 101,
          content:
            "Hi! I am your classmate Megan. send me a message here and we can connect",
          likes: 0,
          liked: false,
        },
      ],
    },
    {
      id: 2,
      content:
        "I am looking for a master student as a mentor to help with a passion project. is anyone intrested?",
      likes: 0,
      liked: false,
      comments: [],
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [filter, setFilter] = useState("");
  // Holds the comment input (per post)
  const [commentInputs, setCommentInputs] = useState<{ [key: number]: string }>(
    {}
  );

  // Create a new post (front-end only)
  const createPost = () => {
    if (!newPost.trim()) return;
    const newId = Math.max(...posts.map((p) => p.id)) + 1;
    const updatedPosts = [
      ...posts,
      {
        id: newId,
        content: newPost,
        likes: 0,
        liked: false,
        comments: [],
      },
    ];
    setPosts(updatedPosts);
    setNewPost("");
  };

  // Delete a post
  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  // Toggle like/unlike a post
  const toggleLikePost = (id: number) => {
    const updated = posts.map((post) => {
      if (post.id === id) {
        // If post is liked, undo it; if unliked, like it
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
        };
      }
      return post;
    });
    setPosts(updated);
  };

  // Add a new comment to a post
  const createComment = (postId: number) => {
    const content = commentInputs[postId]?.trim();
    if (!content) return;

    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          const newCommentId = post.comments.length
            ? Math.max(...post.comments.map((c) => c.id)) + 1
            : 1;
          const newComment: Comment = {
            id: newCommentId,
            content,
            likes: 0,
            liked: false,
          };
          return {
            ...post,
            comments: [...post.comments, newComment],
          };
        }
        return post;
      })
    );

    // Clear the comment input for this post
    setCommentInputs({ ...commentInputs, [postId]: "" });
  };

  // Delete a comment from a post
  const deleteComment = (postId: number, commentId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: post.comments.filter((c) => c.id !== commentId),
          };
        }
        return post;
      })
    );
  };

  // Toggle like/unlike a comment
  const toggleLikeComment = (postId: number, commentId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: post.comments.map((comment) => {
              if (comment.id === commentId) {
                return {
                  ...comment,
                  liked: !comment.liked,
                  likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
                };
              }
              return comment;
            }),
          };
        }
        return post;
      })
    );
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Discourse Page</h1>

          {/* Post bar to create new posts */}
          <div className="mb-4">
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Write a post..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={createPost}
            >
              Post
            </button>
          </div>

          {/* Search filter */}
          <input
            className="w-full p-2 border rounded mb-4"
            placeholder="Search posts..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />

          {posts?.length > 0 ? (
            posts
              .filter((post) =>
                post.content.toLowerCase().includes(filter.toLowerCase())
              )
              .map((post) => (
                <div key={post.id} className="bg-white p-4 rounded shadow mb-4">
                  <p>{post.content}</p>
                  <div className="flex items-center mt-2">
                    {/* Like post button */}
                    <button
                      onClick={() => toggleLikePost(post.id)}
                      className="mr-4 flex items-center"
                    >
                      {post.liked ? (
                        <AiFillLike className="text-blue-500" />
                      ) : (
                        <AiOutlineLike />
                      )}
                      {post.likes}
                    </button>

                    {/* Delete post button */}
                    <button
                      onClick={() => deletePost(post.id)}
                      className="text-red-500 flex items-center"
                    >
                      <FaTrash />
                    </button>
                  </div>

                  {/* Comments section */}
                  <div className="mt-4 ml-4">
                    <h3 className="font-semibold mb-2">Comments:</h3>
                    {post.comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="border border-gray-200 p-2 rounded mb-2"
                      >
                        <p>{comment.content}</p>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() =>
                              toggleLikeComment(post.id, comment.id)
                            }
                            className="mr-4 flex items-center"
                          >
                            {comment.liked ? (
                              <AiFillLike className="text-blue-500" />
                            ) : (
                              <AiOutlineLike />
                            )}
                            {comment.likes}
                          </button>
                          <button
                            onClick={() => deleteComment(post.id, comment.id)}
                            className="text-red-500 flex items-center"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    ))}

                    {/* New comment input */}
                    <div className="mt-2">
                      <textarea
                        className="w-full p-2 border rounded"
                        placeholder="Add a comment..."
                        value={commentInputs[post.id] || ""}
                        onChange={(e) =>
                          setCommentInputs({
                            ...commentInputs,
                            [post.id]: e.target.value,
                          })
                        }
                      />
                      <button
                        className="mt-1 bg-green-500 text-white px-3 py-1 rounded"
                        onClick={() => createComment(post.id)}
                      >
                        Comment
                      </button>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <p>Loading posts...</p>
          )}
        </div>
      </main>
    </>
  );
};

export default DiscoursePage;
