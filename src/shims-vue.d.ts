// import { MetaNavigation } from './router/MetaNavigation'

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Adding type definition for route meta fixes application
// declare module 'vue-router' {
//   interface RouteMeta {
//     requiresAuth?: boolean,
//     navigation?: MetaNavigation
//   }
// }
