export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:' Freelancer - Start Bootstrap Theme',
    htmlAttrs: {
      lang: 'en',
    },
   
        
       
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'assets/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700'},
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic'},
    ],
  },
  
 

 
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/bootstrap.css'],

  script: [
    '@/assets/js/script.js','https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js','https://cdn.startbootstrap.com/sb-forms-latest.js'
   
],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
