<template>
    <header class="docs-header">
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <template v-for="(item, index) in breadcrumb">
                    <li
                        v-if="routes[item]"
                        :key="item"
                        :class="{ 'is-active': index === breadcrumb.length - 1 }">
                        <nuxt-link :to="routes[item].path">
                            {{ routes[item].breadTitle || routes[item].title }}
                        </nuxt-link>
                    </li>
                </template>
            </ul>
        </nav>

        <h1 class="title" v-html="title"/>
        <h2 class="subtitle" v-html="subtitle"/>
    </header>
</template>

<script>
import routes from '~/data/routes'

export default {
    data() {
        return {
            routes
        }
    },
    computed: {
        breadcrumb() {
            return this.$store.state.docs.breadcrumb
        },
        title() {
            return this.$store.state.docs.title
        },
        subtitle() {
            return this.$store.state.docs.subtitle
        }
    }
}
</script>
