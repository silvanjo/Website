<template>

  <div class="blog-entry">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>

</template>

<script>
  
export default 
{
  props: 
  {
    title: 
    {
      type: String,
      required: true
    },
    content: 
    {
      type: String,
      required: true
    }
  }
}

</script>

<style scoped>

.blog-entry 
{
  max-width: 900px;   
  margin: 40px auto; 
  padding: 0 20px;  
  text-align: center;
}

.blog-entry h1 
{
  font-size: 2em;
  margin-bottom: 20px;
}

.blog-entry p 
{
  text-align: justify;
  text-justify: inter-word;
  font-size: 1.2em;
  line-height: 1.5;
}

</style>

