<template>
    <main>
        <TheNavbar/>

        <section class="documentation">
            <div class="sidebar-bg"/>

            <div class="container is-fullhd docs-template-horizontal">
                <TheSidebar :data="menu"/>
                <div class="docs-main">
                    <div class="docs-main-container">
                        <TheHeader v-bind="meta"/>

                        <nuxt/>

                        <template v-if="meta.githubPath">
                            <ImproveThis v-bind="meta"/>
                        </template>
                    </div>
                </div>
            </div>
        </section>

        <TheFooter/>
    </main>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheNavbar from '~/components/TheNavbar'
import TheFooter from '~/components/TheFooter'
import TheSidebar from '~/components/TheSidebar'
import ImproveThis from '~/components/ImproveThis'

export default {
    components: {
        TheHeader,
        TheNavbar,
        TheFooter,
        TheSidebar,
        ImproveThis
    },
    data() {
        return {
            menu: [],
            meta: {}
        }
    },
    head: {
        title: 'Documentation | Buefy'
    }
}
</script>
