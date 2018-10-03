<template>
    <article class="content">
        <p>
            Buefy has no dependencies aside from Bulma. But sometimes we need to add a very specific
            funcionality to our application.
        </p>
        <p>
            These extensions are some examples of how you can extend some of the components using
            external libraries.  And by no means is the only ones "supported", you can play with it
            and add basically anything you may want.
        </p>
        <p>
            Also, don't forget to add a Pull Request if you've made one :)
        </p>
        <blockquote>
            All examples shown here are not built-in Buefy, you have to install dependencies for
            each one.
        </blockquote>
    </article>
</template>

<script>
import {setPageTitle} from '~/lib/page-title'

export default {
    layout: 'documentation',
    head: () => setPageTitle('Extensions'),
    fetch({ store }) {
        store.commit('docs/setBreadcrumb', [
            '/',
            'extensions'
        ])
        store.commit('docs/setTitle', 'Extensions')
        store.commit('docs/setSubtitle', 'See how you can improve Buefy with other packages')
    }
}
</script>
