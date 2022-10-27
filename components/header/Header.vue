<template>
    <nav class="header">
        <Logo />
        <ul class="header__list">
            <li class="header__list--item">
                <nuxt-link to="/works">
                    Works
                </nuxt-link>
            </li>
            <li class="header__list--item">
                <nuxt-link to="/blog">
                    Blog
                </nuxt-link>
            </li>
            <li class="header__list--item">
                <nuxt-link to="/contact">
                    Contact
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

</style>