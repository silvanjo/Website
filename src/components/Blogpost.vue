<template>

<div class="blog-entry" ref="blog_post_preview_area"></div>

</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
  
export default 
{
  data() 
  {
    return {
      // Display are for the blog post that is an delta object that can be displayed by Quill
      quillDisplayArea: null,
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

      let options = 
      {
        theme: 'bubble',
        readOnly: true
      }

      this.quillDisplayArea = new Quill(this.$refs.blog_post_preview_area, options)
      this.quillDisplayArea.setContents(post.content)
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

