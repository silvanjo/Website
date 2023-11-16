<template>

    <div>

      <h1>Blog Posts</h1>

      <div v-for="post in blogPosts" :key="post._id">

        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>

        <small>Author: {{ post.author }}</small>

      </div>

    </div>
  </template>
  
  <script>

    export default 
    {
        data() {
        return {
            blogPosts: []
        };
    },
        async mounted() 
        {
            console.log('BlogPostView mounted.');

            try 
            {
                const response = await fetch('http://localhost:3000/api/blogposts');
                this.blogPosts = await response.json();
            } catch (error) 
            {
                console.error('Error fetching blog posts:', error);
            }

            console.log('Blog posts:', this.blogPosts);
        }
    };

  </script>
  
  <style scoped>

  </style>