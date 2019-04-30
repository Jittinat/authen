// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCgoq7q8NzLo2QNxXNtsPmtOcf1XuBs0Kk",
  authDomain: "egco421auth.firebaseapp.com",
  databaseURL: "https://egco421auth.firebaseio.com",
  projectId: "egco421auth",
  storageBucket: "egco421auth.appspot.com",
  messagingSenderId: "58592829174"
};
firebase.initializeApp(config);
window.firebase = firebase
let app

/* eslint-disable no-new */
firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: {
        App
      },
      template: '<App/>'
    })
  }
})
