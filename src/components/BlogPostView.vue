<template>

    <div class="blog-post-preview-list">


        <div class="blog-post-preview" v-for="post in blogPostsPreviews" :key="post._id">
           
            <router-link :to="{ name: 'BlogPost', params: { id: post._id } }">

                <h2 class="blog-post-preview-title">{{ post.title }}</h2>
                <p class="blog-post-preview-content">{{ post.content }}</p>

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
            blogPostsPreviews: []
        };
        },
        async mounted() 
        {
            try 
            {
                const response = await fetch('http://localhost:3000/api/blogposts');
                let posts = await response.json();

                const previewWordLength = 100;
                this.blogPostsPreviews = posts.map( post => {
                    const words = post.content.split(" ");
                    if (words.length > previewWordLength)
                        post.content = words.slice(0, previewWordLength).join(" ") + "...";
                    return post;
                })


            } catch (error) 
            {
                console.error('Error fetching blog posts:', error);
            }
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
        max-width: 700px;

        border-radius: 10px;

        /* Smooth transition for background color */
        transition: background-color 0.3s; 
    }

    .blog-post-preview:hover 
    {
        /* Subtle color change on hover */
        background-color: #464646; 
    }

</style>