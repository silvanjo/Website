<template>
        <div ref="editor" id="quill-editor-container"></div>
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
            let options = {
                theme: 'snow'
            }

            this.quill = new Quill(this.$refs.editor, options)
        },
        methods: {
        }
    }
</script>

<style scoped>
    
    

</style>