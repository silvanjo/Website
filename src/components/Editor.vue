<template>
        <div ref="editor"></div>
</template>

<script>
    import Quill from 'quill'
    import 'quill/dist/quill.snow.css'

    export default {
        name: 'Editor',
        data() {
            return {
                quill: null
            }
        },
        mounted() {
            let toolbarOptions = [
                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                ['blockquote', 'code-block'],

                [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                [{ 'direction': 'rtl' }],                         // text direction

                [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                [{ 'font': ['Roboto'] }],
                [{ 'align': [] }],

                ['clean']                                         // remove formatting button
            ];

            let options = {
                theme: 'snow',
                modules: {
                    toolbar: toolbarOptions
                }
            }

            this.quill = new Quill(this.$refs.editor, options)
            
            // Emit the delta whenever the editor changes
            this.quill.on('text-change', () => {
                const blogPostHTML = this.quill.root.innerHTML
                this.$emit('updateBlogPostHTML', blogPostHTML)
            })
            
        },
        methods: {

        },
    }
</script>

<style scoped>
    
    

</style>