<template>

    <!-- If previewMode is set render BlogPostPreview.vue component, otherwise render Editor.vue component -->
    <div v-if="previewMode" id="blog-post-preview-container">
        <BlogPostPreview :blogPostHTML="blogPostHTML"></BlogPostPreview>
        <div>
            <button id="post-button" class="btn btn-primary" @click="createPost">Post</button>
            <button id="edit-post-button" class="btn btn-primary" @click="editPost">Edit Post</button>
        </div>
    </div>
    <div v-else id="editor-container">
        <Editor @updateBlogPostHTML="updateBlogPostHTML"></Editor>
        <button id="preview-button" class="btn btn-primary" @click="enterPreviewMode">Preview</button>
    </div>
  
</template>

<script>
    import Editor from './Editor.vue';
    import BlogPostPreview from './BlogPostPreview.vue';

    import axios from 'axios';

    export default {
        name: 'Dashboard',
        components: {
            Editor,
            BlogPostPreview
        },
        data() {
            return {
                blogPostTitle: '',
                blogPostHTML: '',
                previewMode: false  // When in preview mode, render the BlogPostPreview.vue component
            }
        },
        mounted() {

        },
        methods: {
            updateBlogPostHTML(blogPostHTML) {
                this.blogPostHTML = blogPostHTML;
            },

            enterPreviewMode() {
                this.previewMode = true;
            },

            editPost() {
                this.previewMode = false;
            },

            extractBlogPostHeader() {
                let title = 'Undefined';

                // TODO: Extract title from this.blogPostHTML

                return title;
            },

            createPost() {
                this.blogPostTitle = this.extractBlogPostHeader();

                const postData = {
                    title: this.blogPostTitle,
                    content: this.blogPostHTML,
                    author: "John Doe",
                }

                axios.post('http://localhost:3000/api/blogposts', postData)
                    .then(response => {
                        const data = response.data;
                        const postID = data._id;
                        this.$router.push({ name: 'BlogPost', params: { id: postID } });
                    })
                    .catch(error => {
                        console.log(error)
                    });

            },
        }
    }
</script>

<style scoped>

    #editor-container {
        width: 45%;
        height: 500px;
        margin: 45px auto 0;
    }

    #blog-post-preview-container {
        width: 45%;
        margin: 45px auto 0;
    }

    #preview-button {
        margin-top: 20px;
    }

    #post-button {
        margin-right: 25px;
    }

</style>