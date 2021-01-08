<template>
  <div class="song">
    <div class="img">
      <div class="lcon"></div>
    </div>
    <div class="musicList">
      <Hot_list :data="data"></Hot_list>
    </div>
  </div>
</template>
<script>
import Hot_list from "../components/Hot_list";
export default {
  data() {
    return {
      data: [],
    };
  },
  components: {
    Hot_list,
  },
  beforeRouteEnter(to, form, next) {
    next((vm) => {
      vm.axios.get("/top/list?idx=1").then((data) => {
        vm.data = data.data.playlist.tracks;
        console.log(data.data.playlist.tracks);
      });
    });
  },
};
</script>
<style lang="less" scoped>
.song {
  .img {
    padding: 20px;
    height: 161px;
    background: url(../assets/rege.jpg) no-repeat center center/100% 100%;
    .lcon {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      width: 142px;
      height: 67px;
      background: url(../assets/wyytb.png) no-repeat -24px -30px/166px 97px;
    }
  }
}
</style>