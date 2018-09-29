<template>
    <nav
        :class="{ 'is-primary is-transparent': light }"
        class="navbar docs-navbar is-spaced has-shadow">
        <div class="container">
            <div class="navbar-brand">
                <nuxt-link
                    to="/"
                    class="navbar-item"
                    title="Buefy: lightweight UI components for Vue.js based on Bulma"
                    active-class="">
                    <img
                        v-if="light"
                        src="../assets/buefy-light.png"
                        alt="Buefy">
                    <img
                        v-else
                        src="../assets/buefy.png"
                        alt="Buefy">
                </nuxt-link>

                <a
                    :class="{ 'has-text-dark': !light }"
                    class="navbar-item"
                    href="https://github.com/buefy/buefy"
                    target="_blank"
                    title="Github">
                    <b-icon icon="github-circle"/>
                </a>

                <a
                    :class="{ 'has-text-twitter': !light }"
                    class="navbar-item"
                    href="https://twitter.com/rafaelpimpa"
                    target="_blank"
                    title="Twitter">
                    <b-icon icon="twitter"/>
                </a>

                <a
                    :class="{ 'has-text-discord': !light }"
                    class="navbar-item"
                    href="https://discordapp.com/invite/ZkdFJMr"
                    target="_blank"
                    title="Discord">
                    <b-icon icon="discord"/>
                </a>

                <span
                    :class="{ 'is-active': isMenuActive }"
                    class="navbar-burger burger"
                    @click="isMenuActive = !isMenuActive">
                    <span/>
                    <span/>
                    <span/>
                </span>
            </div>

            <div :class="{ 'is-active': isMenuActive }" class="navbar-menu">
                <div class="navbar-end">
                    <nuxt-link
                        to="/"
                        exact
                        class="navbar-item">
                        Home
                    </nuxt-link>

                    <nuxt-link to="/documentation" class="navbar-item">
                        Documentation
                    </nuxt-link>

                    <nuxt-link to="/extensions" class="navbar-item">
                        Extensions
                    </nuxt-link>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <div class="navbar-link">Info</div>

                        <div class="navbar-dropdown is-boxed">
                            <strong class="navbar-item is-version">
                                <span class="has-text-primary">Buefy version</span>
                                <span class="has-text-grey">{{ version }}</span>
                            </strong>
                            <strong class="navbar-item is-version">
                                <span class="has-text-bulma">Bulma version</span>
                                <span class="has-text-grey">{{ bulmaVersion }}</span>
                            </strong>

                            <hr class="navbar-divider">
                            <a
                                class="navbar-item"
                                href="https://github.com/buefy/buefy/releases"
                                target="_blank">
                                Changelogs
                            </a>
                        </div>
                    </div>

                    <div class="navbar-item">
                        <a
                            :class="light ? 'is-light' : 'is-twitter'"
                            class="button is-outlined"
                            @click="tweet">
                            <b-icon icon="twitter"/>
                            <span>Tweet</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import buefyPackage from '../../package'
import bulmaPackage from 'bulma/package'

export default {
    props: {
        light: Boolean
    },
    data() {
        return {
            isMenuActive: false,
            version: buefyPackage.version,
            bulmaVersion: bulmaPackage.version
        }
    },
    methods: {
        tweet() {
            const width = 575
            const height = 400
            const left = (window.screen.width - width) / 2
            const top = (window.screen.height - height) / 2
            const url = `https://twitter.com/share?url=${encodeURIComponent(document.location.protocol + '//' + document.location.host)}&text=Buefy: lightweight UI components for Vue.js based on Bulma&hashtags=buefy&via=rafaelpimpa`
            const opts = `status=1,width=${width},height=${height},top=${top},left=${left}`

            window.open(url, '', opts)
        },
        closeMenu() {
            this.isMenuActive = false
        },
        toggleHtmlClip() {
            document
                .documentElement
                .classList
                .toggle('is-clipped-touch', this.isMenuActive)
        }
    },
    mounted() {
        this.$eventHub.$on('navigate', this.closeMenu)
    }
}
</script>
