<template>

    <div id="editor-container">
        <Editor></Editor>
        <button id="preview-button" class="btn btn-primary">Preview</button>
    </div>
  
</template>

<script>
    import Editor from './Editor.vue';

    export default {
        name: 'Dashboard',
        components: {
            Editor
        },
        data() {
            return {
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>

<style scoped>

    #editor-container {
        width: 45%;
        height: 500px;
        margin: 45px auto 0;
    }

    #preview-button {
        margin-top: 20px;
    }

</style>