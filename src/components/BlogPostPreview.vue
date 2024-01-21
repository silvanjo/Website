<template>
    <div ref="blog_post_preview_area"></div>
</template>

<script>
    import Quill from 'quill'
    import 'quill/dist/quill.snow.css'

    export default {
        name: 'BlogPostPreview',
        props: {
            quillDelta: {
                type: Object
            }
        },
        data() {
            return {
                quillDisplayArea: null,
            }
        },
        mounted() {
            let options = {
                theme: 'bubble',
                readOnly: true
            }

            this.quillDisplayArea = new Quill(this.$refs.blog_post_preview_area, options)
            this.quillDisplayArea.setContents(this.quillDelta)
        },
        methods: {
            updateDisplayArea() {
                this.quillDisplayArea.setContents(this.quillDelta)
            }
        },
        watch: {
            quillDelta() {
                console.log('quillDelta changed')
                this.updateDisplayArea()
            }
        }
    }
</script>

<style scoped>

</style>