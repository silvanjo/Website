<template>

    <NavBar/>

    <router-view></router-view>
    
</template>

<style>

    /* 
    Global CSS variables defining colors for dark and light mode
    */
    :root 
    {
        --background-color: #1d1e1e;
        --text-color: #e2e2e2;
        --link-text-color: lightblue;
        --hover-background-color: #464646;
        
        --background-color-light: #fff;
        --text-color-light: #333;
        --link-text-color-light: #0077cc;
        --hover-background-color-light: #ddd;
    }

    .light-theme 
    {
        --background-color: var(--background-color-light);
        --text-color: var(--text-color-light);
        --link-text-color: var(--link-text-color-light);
        --hover-background-color: var(--hover-background-color-light);
    }


    html, body, div
    {
        margin: 0;
        padding: 0;
    }

    body 
    {
        font-family: 'Roboto', sans-serif;
        background-color: var(--background-color);
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
        color: var(--text-color);
    }

    h1 
    {
        font-size: 1.5em;
    }

    p 
    {
        
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-size: 1em; 
        color: var(--text-color);
        line-height: 1.8;
    }

</style>

<script setup>
    import NavBar from './components/NavBar.vue'
    import BlogPost from './components/Blogpost.vue'
    import BlogPostView from './components/BlogPostView.vue'
</script>