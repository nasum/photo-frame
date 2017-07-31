<template>
  <header class="toolbar toolbar-header" style="-webkit-app-region: drag;">
    <h1 class="title">PhotoFrame</h1>
    <div class="toolbar-actions">
      <div class="btn-group">
        <button class="btn btn-default">
          <span class="icon icon-home"></span>
        </button>
        <button class="btn btn-default">
          <span class="icon icon-folder"></span>
        </button>
      </div>
      <button class="btn btn-default">
        <span class="icon icon-play icon-text"></span>
        Start
      </button>
      <button class="btn btn-default">
        <span class="icon icon-shuffle"></span>
      </button>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style>
</style>
