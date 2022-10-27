<template>
    <div class="work__container">
        <div class="work__row">
            <div class="work__image">
                <img :src="imageUrl" alt="Image">
            </div>
            <div class="work__info">
                <div class="work__info--title">
                    {{ title }}
                </div>
                <div class="work__caption">
                    <div class="work__caption--year">
                        {{ year }}
                    </div>
                    <div class="work__caption--subtitle">
                        {{ subtitle }}
                    </div>
                </div>
                <div class="work__info--description">
                    {{ description }}
                </div>
            </div>
        </div>
        <hr class="work__divider">
    </div>
</template>

<script>
export default {
    props: {
        imageUrl: {
            type: String,
            required: true,
        },

        title: {
            type: String,
            required: true,
        },

        year: {
            type: String,
            required: true,
        },

        subtitle: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>

</style>