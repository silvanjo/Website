<template>

    <div class="blog-post-preview-list">

        <div class="blog-post-preview" v-for="post in blogPostsPreviews" :key="post._id">
           
            <router-link :to="{ name: 'BlogPost', params: { id: post._id } }">

                <h2 class="blog-post-preview-title">{{ post.title }}</h2>
                <div v-html="post.content"></div>

                <p class="continue-reading-text">Continue Reading</p>

            </router-link>

        </div>


    </div>
</template>
  
<script>

    export default 
    {
        data() 
        {
        return {
            previewCharacterCount: 450,
            blogPostsPreviews: []
        };
        },
        async mounted() 
        {
            try 
            {
                const response = await fetch('http://localhost:3000/api/blogposts');
                let posts = await response.json();

                this.blogPostsPreviews = posts.map( post => {
                    const blogPostHTML = post.content;
                    
                    // TODO: Cull posts to 100 words

                    return post;
                })


            } catch (error) 
            {
                console.error('Error fetching blog posts:', error);
            }
        },
        methods: 
        {
            
        }
    };

</script>
  
<style scoped>

    .blog-post-preview-list 
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        max-width: 1100px;   
        margin: 40px auto; 
        padding: 0 20px; 

        /* background-color: lightblue; */
    }

    .blog-post-preview
    {
        display: flex;
        flex-direction: column;
        gap: 0px;

        padding: 20px;
        width: 700px;

        border-radius: 10px;

        /* Smooth transition for background color */
        transition: background-color 0.3s; 
    }

    .continue-reading-text
    {
        margin-top: 10px;
        color: var(--link-text-color);
        text-decoration: underline;
    }


    .blog-post-preview:hover 
    {
        /* Subtle color change on hover */
        background-color: var(--hover-background-color); 
    }

</style>