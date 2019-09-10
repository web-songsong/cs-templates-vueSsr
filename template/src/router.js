import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/activity',
        name: 'activity',
        component: () =>
          import(
            /* webpackChunkName: "activity" */ './views/activity/activity-edit.vue'
          )
      }
    ]
  })
}
