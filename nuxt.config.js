module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'nuxt-test',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
     ** Customize the progress bar color
     */
    loading: {color: '#3B8070'},
    /*
     ** Build configuration
     */

    css: [
        '@/assets/css/main.scss'
    ],


    // scripts: [
    //     {
    //         src: "~/assets/main.es6", ssr: false
    //     }
    // ],

    plugins: [],

    build: {
        /*
         ** Run ESLint on save
         */
        extend (config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push(
                    {
                        enforce: 'pre',
                        test: /\.(js|vue)$/,
                        loader: ['eslint-loader'],
                        exclude: /(node_modules)/
                    }
                )
            }
            config.module.rules.push({
                    test: /\.es6$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                }
            )

        },
        postcss: [
            require('autoprefixer')({
                browsers: ['last 10 versions']
            })
        ]

    }
};
