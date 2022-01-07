export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Cicacode - Open source programmer community",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { name: "description", content: "A community for programmers who looking for contribute for open source application and project development. We also provide team for paid project development." },
            { name: "author", content: "Cicacode" },
            { name: "robots", content: "index, follow" },
            { name: "google-site-verification", content: "syCLzhmcisH3MxSaqBWFjm_Dp-6OkPRijNLNb2wu_lg" },
            { name: "og:title", content: "Cicacode - Open source programmer community" },
            { name: "og:description", content: "A community for programmers who looking for contribute for open source application and project development. We also provide team for paid project development." },
            { name: "og:image", content: "https://cicacode.github.io/cicacode.jpeg" },
            { name: "og:url", content: "https://cicacode.github.io" },
            { name: "twitter:title", content: "Cicacode - Open source programmer community" },
            { name: "twitter:description", content: "A community for programmers who looking for contribute for open source application and project development. We also provide team for paid project development." },
            { name: "twitter:image", content: "https://cicacode.github.io/cicacode.jpeg" },
            { name: "twitter:url", content: "https://cicacode.github.io" },

        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: "canonical", href: "https://cicacode.github.io" },
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "@/assets/style.sass"
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        "@nuxtjs/axios"
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

    // Website bundle folder locate here after generate
    generate: {
        dir: "docs"
    },
}
