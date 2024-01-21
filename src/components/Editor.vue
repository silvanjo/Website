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
            let options = {
                theme: 'snow'
            }

            this.quill = new Quill(this.$refs.editor, options)

            // Emit the delta whenever the editor changes
            this.quill.on('text-change', () => {
                const delta = this.quill.getContents()
                this.$emit('updateDelta', delta)
            })
        },
        methods: {
        }
    }
</script>

<style scoped>
    
    

</style>