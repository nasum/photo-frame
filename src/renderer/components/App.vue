<template>
  <div class="window">
    <app-header></app-header>
    <app-body></app-body>
  </div>
</template>

<script>
import Header from './Header'
import AppBody from './AppBody'

export default {
  name: 'App',
  components: {
    AppHeader: Header,
    AppBody: AppBody
  }
}
</script>

<style src="css/base.scss">
</style>
