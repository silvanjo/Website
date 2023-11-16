<template>

    <NavBar/>

    <BlogPostView/>
    
</template>

<style>
    html, body, div
    {
        margin: 0;
        padding: 0;
    }

    body 
    {
        font-family: 'Roboto', sans-serif;
        background-color: lightgray;
    }
</style>

<script setup>
    import NavBar from './components/NavBar.vue'
    import BlogPost from './components/Blogpost.vue'
    import BlogPostView from './components/BlogPostView.vue'
</script>