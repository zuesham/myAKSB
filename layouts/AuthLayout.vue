<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-transparent text-white" reveal>
      <q-toolbar class="row justify-between">
        <q-btn
          flat
          dense
          round
          @click="$router.push({ name: 'auth.login' })"
          v-if="$route.name === 'auth.register' || $route.name === 'auth.forgot-password'"
          aria-label="Back"
        >
          <q-icon name="arrow_back" />
        </q-btn> 
        <div v-else></div>
        <div>{{ version }}</div>
      </q-toolbar>
    </q-header>
    <q-page-container :style="$store.getters.getPageContainerStyle" class="bg-primary-gr">
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { openURL } from 'quasar'
import config from './../config'
export default {
  name: 'MyLayout',
  data () {
    return {
      version: config.version,
      modal: false,
      leftDrawerOpen: this.$q.platform.is.desktop,
    }
  },
  methods: {
    openURL,
    openSheet() {
      this.$q.bottomSheet({
        message: 'Bottom Sheet message',
        actions: [
          {
            label: 'Tukang Paip',
            url: '/senarai-tukang-paip',
            img: 'https://cdn.quasar.dev/img/logo_drive_128px.png',
            id: 'drive'
          },
          {
            label: 'Kaunter Bayaran',
            url: '/senarai-kaunter-bayaran',
            img: 'https://cdn.quasar.dev/img/logo_keep_128px.png',
            id: 'keep'
          },
          {
            label: 'Buletin AKSB',
            url: '/buletin',
            img: 'https://cdn.quasar.dev/img/logo_hangouts_128px.png',
            id: 'calendar'
          },
          {},
          {
            label: 'Hubungi Kami',
            url: 'mailto:pintas@airkelantan.com.my',
            img: 'https://cdn.quasar.dev/img/logo_calendar_128px.png',
            id: 'calendar'
          },
          {
            label: 'Hotline PINTAS',
            url: 'tel:15777',
            icon: 'share',
            id: 'share'
          },
          {},
          {
            label: 'Profile Pengguna',
            url: '/setting',
            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
            id: 'john'
          }
        ]
      }).onOk(action => {
        this.$router.push(action.url)
      }).onCancel(() => {
      }).onDismiss(() => {
      })
    }
  }
}
</script>
<style scoped>
  .q-field--labeled .q-field__native, .q-field--labeled .q-field__prefix, .q-field--labeled .q-field__suffix{
    color: #ffffff !important;
  }
  .q-field--filled.q-field--focused .q-field__control:before {
    /* opacity: 1; */
    background: rgba(255, 255, 255, 0.5) !important;
    color: #ffffff !important;
  }
  .q-field--focused .q-field__label {
    color: #263238;
  }
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
    color: #ffffff;
    font-weight: bold;
    background: var(--q-color-primary);
  }
  /* Change Autocomplete styles in Chrome*/
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: #fff;
  }
</style>
