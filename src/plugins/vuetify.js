import '@mdi/font/css/materialdesignicons.css'

import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors';
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
    theme: {
        themes:{
            dark:{
                primary: colors.blueGrey.darken2,
                secondary: colors.blueGrey.darken3,
                accent: colors.amber.accent4,
                linkColor: colors.blue.lighten3
            },
            light:{
                primary: colors.blueGrey.darken2,
                secondary: colors.blueGrey.darken3,
                accent: colors.amber.accent4,
                linkColor: colors.blue.lighten3
            }
        },
    },
});
