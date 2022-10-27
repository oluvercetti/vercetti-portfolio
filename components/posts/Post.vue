<template>
    <div class="posts__row">
        <div class="posts__title">
            {{ title }}
        </div>
        <div class="posts__details">
            <div class="posts__details--date">
                {{ date }}
            </div>
            <div class="posts__details--pipe">
                |
            </div>
            <div class="posts__details--subtitle">
                {{ subtitle }}
            </div>
        </div>
        <div class="posts__body">
            {{ body }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
            default: "",
        },
        date: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>

</style>