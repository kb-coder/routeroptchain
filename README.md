# routeroptchain

This project demonstrates a breaking change between vue-router 4.0.3 and 4.0.4 when using Typescript and with custom RouteMeta. We initially did not have any types defined for the RouteMeta. In vue-router@4.0.3 set the RouteMeta to type `any`. But in vue-router@4.0.4, the `any` type was replaced with `unknown`. This is the vue-router commit that introduced the [breaking change](https://github.com/vuejs/vue-router-next/commit/eef0472e3589ed0a6df0528a7b96f1d7bf316843).

## System Info
Node: 14.16.0
Npm: 6.14.11
@vue/cli: 4.5.12

## Issue
Run `npm run build`. Will receive build errors with vue-router@4.0.4+.
```
TS2571: Object is of type 'unknown'.
    17 |     const pageTitle = computed(() => {
    18 |       return !isEmpty(currentRoute.meta?.navigation?.displayText)
  > 19 |         ? currentRoute.meta?.navigation?.displayText
       |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    20 |         : currentRoute.name
    21 |           ? currentRoute.name
    22 |           : 'Karen PWA App'

 error  in src/components/app-navigation.vue:18:45
```

Downgrade to vue-router@4.0.3. No build errors on the same code.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
