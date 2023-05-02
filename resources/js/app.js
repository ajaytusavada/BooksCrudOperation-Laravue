window.Vue = require('vue');
// router
window.router = router;
window.Fire = new Vue();

const app = new Vue({
    el: '#app',
    router,
}).$mount('#app');