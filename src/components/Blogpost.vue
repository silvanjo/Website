<template>

  <div class="blog-entry" v-html="blogPostHTML"></div>

</template>

<script>
export default 
{
  data() 
  {
    return {
      // Display are for the blog post that is an delta object that can be displayed by Quill
      blogPostHTML: ''
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
      let post = await response.json();

      console.log("Post: " + post);
      this.blogPostHTML = post.content;
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
  max-width: 800px;   
  margin: 40px auto; 
  padding: 0 20px;  
}

</style>

