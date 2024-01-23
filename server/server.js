const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('./database');

const BlogPost = require('./models/BlogPost');

const PORT = 3000;

const app = express();

// Middleware to allow cross-origin requests to specified host
app.use(cors({ origin: 'http://localhost:5173' }));

// Middleware to parse JSON requests
app.use(bodyParser.json());

app.get('/api/blogposts/:id', async (req, res) => {
  console.log('Getting a blogpost: ' + req.params.id)

  try {
    const blogPost = await BlogPost.findById(req.params.id);

    if (!blogPost) {
      return res.status(404).send('Blog post not found');
    }

    res.json(blogPost);
  } catch (error) {
    res.status(500).send(error);
  }
})

// API route for blog posts
app.get('/api/blogposts', async (req, res) => {
  console.log('Getting all blogposts')

  try {
    const posts = await BlogPost.find();
    res.json(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});

// API route for creating a blog post
app.post('/api/blogposts', async (req, res) => {
  console.log('Posting a new blogpost')

  try {
    const newPost = new BlogPost({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).send(error);
  }
});

// API route for updating a blog post
app.patch('/api/blogposts/:id', async (req, res) => {
  console.log('Patching a blog post')

  try {
      const postId = req.params.id;

      // Finds the post by id 
      const blogPost = await BlogPost.findById(postId);

      // If the post is not found, return a 404 error
      if (!blogPost) {
          return res.status(404).send('Blog post not found');
      }

      // Updates the post with the request body
      if (req.body.title) 
        blogPost.title = req.body.title;
      if (req.body.content) 
        blogPost.content = req.body.content;

      // Saves the post in the database
      await blogPost.save();

      res.json(blogPost);
  } catch (error) {
      res.status(500).send(error);
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
