import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import Validator from 'vue-validator';

import App from './App.vue';

Vue.use(Router);
Vue.use(Resource);
Vue.use(Validator);

require('../config/_assets.js');

/* eslint-disable no-new */
const router = new Router({ hashbang: false, history: true });
import routes from '../config/_routes.js';
router.map(routes);
router.start(App, '#root');

export { router };
