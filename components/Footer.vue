<template>
    <footer class="footer">
        <div class="footer__icons">
            <nuxt-link to="/" class="footer__icon">
                <font-awesome-icon :icon="['fab', 'twitter']" />
            </nuxt-link>
            <nuxt-link to="/" class="footer__icon">
                <font-awesome-icon :icon="['fab', 'instagram']" />
            </nuxt-link>
            <nuxt-link to="/" class="footer__icon">
                <font-awesome-icon :icon="['fab', 'facebook']" />
            </nuxt-link>
            <nuxt-link to="/" class="footer__icon">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
            </nuxt-link>
        </div>
        <div class="footer__copyright">
            Copyright &copy; {{ currentYear }} All rights reserved.
        </div>
    </footer>
</template>

<script>
const d = new Date();
const year = d.getFullYear();

export default {

    data() {
        return {
            currentYear: year,
        };
    },
};
</script>

<style lang="scss" scoped>

</style>