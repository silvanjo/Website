import { createRouter, createWebHistory } from 'vue-router'
import BlogPostView from './components/BlogPostView.vue'
import BlogPost from './components/Blogpost.vue'
import Dashboard from './components/Dashboard.vue'

const routes = [
    {
        path: '/',
        name: 'BlogPostView',
        component: BlogPostView
    },
    {
        path: '/blogpost/:id',
        name: 'BlogPost',
        component: BlogPost,
        props: true
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router