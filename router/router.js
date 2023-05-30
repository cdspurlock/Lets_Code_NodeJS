const express = require("express");
const router = express.Router();

// data store
let posts = [];

// GET all posts
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Successful GET",
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
    posts: posts,
  });
});

// GET post by ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const post = posts.find((post) => post.id === id);

  if (!post) {
    res.status(404).json({
      message: "Post not found",
      metadata: {
        hostname: req.hostname,
        method: req.method,
      },
    });
  } else {
    res.status(200).json({
      message: "Successful - GET by ID",
      post: post,
      metadata: {
        hostname: req.hostname,
        method: req.method,
      },
    });
  }
});

// POST a new post
router.post("/", (req, res) => {
  const newPost = req.body;
  posts.push(newPost);

  res.status(201).json({
    message: "Post created",
    post: newPost,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// PATCH (update) post by ID
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const updatedPost = req.body;
  const index = posts.findIndex((post) => post.id === id);

  if (index === -1) {
    res.status(404).json({
      message: "Post not found",
      metadata: {
        hostname: req.hostname,
        method: req.method,
      },
    });
  } else {
    posts[index] = {
      ...posts[index],
      ...updatedPost,
    };

    res.status(200).json({
      message: "Post updated",
      post: posts[index],
      metadata: {
        hostname: req.hostname,
        method: req.method,
      },
    });
  }
});

// DELETE post by ID
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = posts.findIndex((post) => post.id === id);

  if (index === -1) {
    res.status(404).json({
      message: "Post not found",
      metadata: {
        hostname: req.hostname,
        method: req.method,
      },
    });
  } else {
    const deletedPost = posts.splice(index, 1);

    res.status(200).json({
      message: "Post deleted",
      post: deletedPost[0],
      metadata: {
        hostname: req.hostname,
        method: req.method,
      },
    });
  }
});

module.exports = router;
