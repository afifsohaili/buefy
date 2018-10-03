import Vue from 'vue'

export const state = () => ({
    breadcrumb: ['/'],
    title: 'Buefy',
    subtitle: ''
})

export const mutations = {
    setBreadcrumb(state, breadcrumb) {
        Vue.set(state, 'breadcrumb', breadcrumb)
    },
    setTitle(state, title) {
        Vue.set(state, 'title', title)
    },
    setSubtitle(state, subtitle) {
        Vue.set(state, 'subtitle', subtitle)
    }
}
