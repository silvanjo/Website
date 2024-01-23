<template>
    <div v-html="blogPostHTML"></div>
</template>

<script>
    import Quill from 'quill'
    import 'quill/dist/quill.snow.css'

    export default {
        name: 'BlogPostPreview',
        props: {
            blogPostHTML: {
                type: String
            }
        },
        data() {
            return {
                
            }
        },
        mounted() {
            // Convert the Quill delta object to HTML
            
        },
        methods: {
            
        },
    }
</script>

<style scoped>

</style>