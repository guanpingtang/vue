import Vue from 'vue';
import iView from 'iview';
import mavonEditor from 'mavon-editor';
import moment from 'moment';
import App from './App.vue';
import router from './router';
import store from './store';
import 'mavon-editor/dist/css/index.css';
import 'iview/dist/styles/iview.css';
import './main.less';
import './main.css';
import './assets/iconfont';
import notice from './components/iviewOC/notice';
import message from './components/iviewOC/message';
import IviewOC from './components/iviewOC/index';
import './assets/util/globFunction';

Vue.filter('dateformat', (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') => moment(dataStr).format(pattern));
Vue.use(iView);
Vue.use(IviewOC);
Vue.use(mavonEditor);

Vue.config.productionTip = false;

const vue = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

notice(vue);
window.VUE = vue;
window.message = message(vue);
