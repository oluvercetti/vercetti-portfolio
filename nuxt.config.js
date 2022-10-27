export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Vercetti's Portfolio",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "static/scss/main.scss",
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [{
        path: "~/components", // will get any components nested in let's say /components/test too
        pathPrefix: false,
        extensions: ["vue"],
    }],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    // https://go.nuxtjs.dev/eslint
    // ["@nuxtjs/eslint-module", { cache: false }],
        "@nuxt/components",
        "@nuxtjs/fontawesome",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        "@nuxtjs/style-resources",
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extend(config) {
            config.resolve.alias.vue = "vue/dist/vue.common";
        },
    },

    // styleResources
    styleResources: {
        scss: [
            "./static/scss/abstracts/_variables.scss",
            "./static/scss/abstracts/_mixins.scss",
            "./static/scss/vendor/neat/_neat.scss",
        ],
    },

    fontawesome: {
        icons: {
            solid: true,
            brands: true,
        },
    },
};