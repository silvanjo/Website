<template>

    <!-- If previewMode is set render BlogPostPreview.vue component, otherwise render Editor.vue component -->
    <div v-if="previewMode" id="blog-post-preview-container">
        <BlogPostPreview :quillDelta="quillDeltaProp"></BlogPostPreview>
        <div>
            <button id="post-button" class="btn btn-primary">Post</button>
            <button id="edit-post-button" class="btn btn-primary">Edit Post</button>
        </div>
    </div>
    <div v-else id="editor-container">
        <Editor @updateDelta="updateDeltaEvent"></Editor>
        <button id="preview-button" class="btn btn-primary" @click="updateDeltaPropEvent">Preview</button>
    </div>
  
</template>

<script>
    import Editor from './Editor.vue';
    import BlogPostPreview from './BlogPostPreview.vue';

    export default {
        name: 'Dashboard',
        components: {
            Editor,
            BlogPostPreview
        },
        data() {
            return {
                quillDelta: null,
                quillDeltaProp: null,
                previewMode: false  // When in preview mode, render the BlogPostPreview.vue component
            }
        },
        mounted() {
        },
        methods: {
            updateDeltaEvent(delta) {
                this.quillDelta = delta;
            },

            updateDeltaPropEvent() {
                this.quillDeltaProp = this.quillDelta;
                this.previewMode = true;
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