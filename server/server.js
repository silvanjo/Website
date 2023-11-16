const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('./database.js');

const BlogPost = require('./models/BlogPost');


const PORT = 3000;
const distPath = path.join(__dirname, '../dist');

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Serve static files from the Vue app (assuming a "dist" folder)
app.use(express.static(distPath));

// API route for blog posts
app.get('/api/blogposts', async (req, res) => {
    try {
      const posts = await BlogPost.find();
      res.json(posts);
    } catch (error) {
      res.status(500).send(error);
    }
});

// API route for creating a blog post
app.post('/api/blogposts', async (req, res) => {
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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
