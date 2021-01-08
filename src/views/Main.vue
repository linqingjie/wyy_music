<template>
  <div class="main">
    <Topnav></Topnav>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import Topnav from "../components/Topnav";
export default {
  components: {
    Topnav,
  },
};
</script>
<style lang="less" scoped>
.main {
  padding-top: 42;
}
</style>
