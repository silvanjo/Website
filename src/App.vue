<template>

    <NavBar/>

    <router-view></router-view>
    
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
        background-color: #1d1e1e;
    }

    a 
    {
        text-decoration: none;
        color: inherit;
    }

    h1, h2, h3, h4, h5, h6
    {
        
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
        font-weight: bold;
        color: #e2e2e2;
    }

    h1 
    {
        font-size: 2.3em;
    }

    p 
    {
        
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-size: 1.1em; 
        color: #e2e2e2;
        line-height: 1.8;
    }

</style>

<script setup>
    import NavBar from './components/NavBar.vue'
    import BlogPost from './components/Blogpost.vue'
    import BlogPostView from './components/BlogPostView.vue'
</script>