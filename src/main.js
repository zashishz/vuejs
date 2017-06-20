import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

export const eventBus = new Vue({
  methods: {
    emitChangeEvent(mainCompVal) {
      this.$emit('nameChanged', mainCompVal);
    }
  }
});

Vue.component('home-tag', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
