<template>
    <main>
        <div class="blogpage__container">
            <h1 class="blogpage__header">
                Blog
            </h1>
            <Post
                title="Making a design system from scratch"
                date="12 Feb, 2022"
                subtitle="Design, Pattern"
                body="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
            <hr class="work__divider">
            <Post
                title="Creating pixel perfect icons in Figma"
                date="12 Feb, 2022"
                subtitle="Figma, Icon Design"
                body="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
            <hr class="work__divider">
            <Post
                title="Creating pixel perfect icons in Figma"
                date="12 Feb, 2022"
                subtitle="Figma, Icon Design"
                body="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
            <hr class="work__divider">
            <Post
                title="Creating pixel perfect icons in Figma"
                date="12 Feb, 2022"
                subtitle="Figma, Icon Design"
                body="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
            <hr class="blogpage__divider">
        </div>
    </main>
</template>

<script>
export default {
    head: {
        title: "Vercetti's Portfolio - Blog",
    },
};
</script>

<style lang="scss" scoped>
.posts {
    &__row {
        min-height: unset;
        padding: unset;
    }

    &__details {
        width: unset;
    }
}
</style>