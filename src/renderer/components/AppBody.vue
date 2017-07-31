<template>
  <div class="window-content">
    <div class="pane-group">
      <sidebar></sidebar>
      <image-list></image-list>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import ImageList from './ImageList.vue'

export default {
  name: 'AppBody',
  components: {
    sidebar: Sidebar,
    ImageList: ImageList
  }
}
</script>
