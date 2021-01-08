<template>
  <div class="topnav">
    <ul>
      <li>
        <router-link to="/">推荐音乐</router-link>
      </li>
      <li>
        <router-link to="/hot_song_list">热歌榜</router-link>
      </li>
      <li>
        <router-link to="/search">搜索</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.topnav {
  ul {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 100;
    background: white;
    display: flex;
    border-bottom: 1px solid #cccccc;
    li {
      line-height: 40px;
      flex: 1;
      a {
        display: inline-block;
        text-decoration: none;
        font-size: 15px;
        color: #333333;
        &.router-link-exact-active {
          border-bottom: 2px solid #d43c33;
          color: #d43c33;
        }
      }
    }
  }
}
</style>