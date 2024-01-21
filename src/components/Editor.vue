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
        props: {
            quillDelta: {
                type: Object
            }
        },
        mounted() {
            let options = {
                theme: 'snow'
            }

            this.quill = new Quill(this.$refs.editor, options)

            if (this.quillDelta)
                this.quill.setContents(this.quillDelta)
            
            // Emit the delta whenever the editor changes
            this.quill.on('text-change', () => {
                const delta = this.quill.getContents()
                this.$emit('updateDelta', delta)
            })
            
        },
        methods: {
        },
        wacht: {
            quillDelta() {
                console.log('quillDelta changed')
                this.quill.setContents(this.quillDelta)
            }
        }
    }
</script>

<style scoped>
    
    

</style>