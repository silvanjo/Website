<template>

    <div class="blog-post-preview-list">

        <div class="blog-post-preview" v-for="post in blogPostsPreviews" :key="post._id">
           
            <router-link :to="{ name: 'BlogPost', params: { id: post._id } }">

                <h2 class="blog-post-preview-title">{{ post.title }}</h2>
                <p class="blog-post-preview-content">{{ post.content }}</p>

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
                    const delta = post.content;
                    post.content = this.extractTextFromDelta(delta);
                    return post;
                })


            } catch (error) 
            {
                console.error('Error fetching blog posts:', error);
            }
        },
        methods: 
        {
            // Since the content of the blog post is a delta object, we need to extract the text from it
            // This function extracts the first previewCharacterCount characters from the delta object
            extractTextFromDelta(delta)
            {
                let text = '';

                for (const op of delta.ops)
                {
                    if (op.insert)
                        text += op.insert;

                    if (text.length > this.previewCharacterCount)
                        return text + '...';
                }

                return text;
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