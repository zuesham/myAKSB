<template>
  <q-layout view="hHh lPr fFf">
    <v-header />

    <q-page-container :style="$store.getters.getPageContainerStyle">
      <router-view  class="q-pb-lg"/>
    </q-page-container>

    <v-footer />
  </q-layout>
</template>

<script>
import VHeader from 'components/Header'
import VFooter from 'components/Footer'
import VDrawer from 'components/drawer'

export default {
  name: 'MyLayout',
  components: { VHeader, VFooter, VDrawer },
  data () {
    return {
      modal: false,
      leftDrawerOpen: this.$q.platform.is.desktop,
    }
  }
}
</script>

<style scoped>
  #logo-wrapper img {
    width: 100%;
  }
  #logo-wrapper span {
    font-size: 1.5em;
    font-weight: bold;
  }
  .text-caption {
    color: #f7f7f7!important
  }
  .q-item.q-router-link--active, .q-item--active {
    color: #ffffff !important;
    font-weight: bold;
    background: var(--q-color-primary);
  }
</style>
