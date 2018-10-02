import Vue from 'vue'

export const state = () => ({
    breadcrumb: ['/']
})

export const mutations = {
    setBreadcrumb(state, breadcrumb) {
        Vue.set(state, 'breadcrumb', breadcrumb)
    }
}
