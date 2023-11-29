<template>

  <div class="blog-entry">
    <h1>{{ this.blogPost.title }}</h1>
    <p>{{ this.blogPost.content }}</p>
  </div>

</template>

<script>
  
export default 
{
  data() 
  {
    return {
      blogPost: 
      {
        title: '',
        content: ''
      }
    };
  },
  props: 
  {
    id: 
    {
      type: String,
      required: true
    }
  },
  async mounted()
  {
    try
    {
      const response = await fetch(`http://localhost:3000/api/blogposts/${this.id}`);
      this.blogPost = await response.json();
    } 
    catch (error) 
    {
      console.error('Error fetching blog post:', error);
    }
  }
}

</script>

<style scoped>

.blog-entry 
{
  max-width: 700px;   
  margin: 40px auto; 
  padding: 0 20px;  
}

.blog-entry h1 
{
  margin-bottom: 20px;
}

</style>

