/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/
import App from 'app/src/App.vue'
let appOptions = App.options /* Vue.extend() */ || App
let appPrefetch = typeof appOptions.preFetch === 'function'
function getMatchedComponents (to, router) {
  const route = to
    ? (to.matched ? to : router.resolve(to).route)
    : router.currentRoute
  if (!route) { return [] }
  return Array.prototype.concat.apply([], route.matched.map(m => {
    return Object.keys(m.components).map(key => {
      const comp = m.components[key]
      return {
        path: m.path,
        c: comp.options /* Vue.extend() */ || comp
      }
    })
  }))
}
export function addPreFetchHooks (router, store) {
  // Add router hook for handling preFetch.
  // Doing it after initial route is resolved so that we don't double-fetch
  // the data that we already have. Using router.beforeResolve() so that all
  // async components are resolved.
  router.beforeResolve((to, from, next) => {
    const
      matched = getMatchedComponents(to, router),
      prevMatched = getMatchedComponents(from, router)
    let diffed = false
    const preFetchList = matched
      .filter((m, i) => {
        return diffed || (diffed = (
          !prevMatched[i] ||
          prevMatched[i].c !== m.c ||
          m.path.indexOf('/:') > -1 // does it has params?
        ))
      })
      .filter(m => m.c && typeof m.c.preFetch === 'function')
      .map(m => m.c.preFetch)
    
    if (appPrefetch === true) {
      appPrefetch = false
      preFetchList.unshift(appOptions.preFetch)
    }
    
    if (preFetchList.length === 0) {
      return next()
    }
    let hasRedirected = false
    const redirect = url => {
      hasRedirected = true
      next(url)
    }
    const proceed = () => {
      
      if (hasRedirected === false) { next() }
    }
    
    preFetchList.reduce(
      (promise, preFetch) => promise.then(() => hasRedirected === false && preFetch({
        store,
        currentRoute: to,
        previousRoute: from,
        redirect
      })),
      Promise.resolve()
    )
    .then(proceed)
    .catch(e => {
      console.error(e)
      proceed()
    })
  })
}
