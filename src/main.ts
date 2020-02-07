import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import * as firebase from "firebase";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyCXV3PTVK72fQIarjtuiJ7HtQ-09ni0T74",
  authDomain: "weliveto.firebaseapp.com",
  databaseURL: "https://weliveto.firebaseio.com",
  projectId: "weliveto",
  storageBucket: "weliveto.appspot.com",
  messagingSenderId: "818077967920",
  appId: "1:818077967920:web:7e667bb10f13896675aff5",
  measurementId: "G-WX132PYNGR"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
