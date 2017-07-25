<template>
  <div class="window">
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
    <div class="window-content">
      <div class="pane-group">
        <div class="pane-sm sidebar">
          <nav class="nav-group">
            <h5 class="nav-group-title">Folders</h5>
            <a class="nav-group-item active">
              all
            </a>
          </nav>
        </div>
        <div class="pane">
          <table class="table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>path</th>
                <th>File Size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  hoge
                </td>
                <td>
                  /hogehoge/hoge
                </td>
                <td>
                  100kb
                </td>
              </tr>
              <tr>
                <td>
                  fuga
                </td>
                <td>
                  /hogehoge/fuga
                </td>
                <td>
                  100kb
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style src="css/base.scss">
</style>
