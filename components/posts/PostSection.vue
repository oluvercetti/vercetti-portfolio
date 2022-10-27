<template>
    <section class="posts">
        <div class="posts__header">
            <div class="posts__header--title">
                Recent posts
            </div>
            <div class="link posts__header--link">
                <nuxt-link to="/blog">
                    View all
                </nuxt-link>
            </div>
        </div>
        <div class="posts__container">
            <Post
                title="Making a design system from scratch"
                date="12 Feb, 2022"
                subtitle="Design, Pattern"
                body="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
            <Post
                title="Creating pixel perfect icons in Figma"
                date="12 Feb, 2022"
                subtitle="Figma, Icon Design"
                body="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
        </div>
    </section>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

</style>