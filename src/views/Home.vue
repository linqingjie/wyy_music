<template>
  <div class="home">
    <Song_title>推荐歌单</Song_title>
    <div class="song">
      <ul>
        <router-link to="/" tag="li" v-for="v in data" :key="v.id">
          <img :src="v.picUrl" alt="" />
          <span>{{ v.playCount | num }}</span>
          <p>{{ v.name }}</p>
        </router-link>
      </ul>
    </div>
    <Song_title>最新音乐</Song_title>
    <div class="musicList">
      <Music_list :music="music" :arr="arr"></Music_list>
    </div>
  </div>
</template>

<script>
import Song_title from "../components/Song_title";
import Music_list from "../components/Music_list";
export default {
  name: "Home",
  data() {
    return {
      data: [],
      music: [],
      arr: [],
    };
  },
  components: {
    Song_title,
    Music_list,
  },
  filters: {
    num(value) {
      return (value / 1000).toFixed(1) + "万";
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.axios.get("/personalized?limit=6").then((data) => {
        vm.data = data.data.result;
      });
      vm.axios.get("/personalized/newsong").then((data) => {
        vm.music = data.data.result;
        let arr = [];
        for (let v of data.data.result) {
          for (let i in v.song) {
            if (i == "artists") {
              arr.push(v.song[i]);
            }
          }
        }
        for (let k of arr) {
          let str = "";
          for (let j of k) {
            str += j.name + "/";
          }
          let index = str.lastIndexOf("/");
          str = str.slice(0, index);
          vm.arr.push(str);
        }
      });
    });
  },
};
</script>
<style lang="less" scoped>
.song {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      position: relative;
      width: 33%;
      margin-bottom: 20px;
      span {
        color: white;
        display: block;
        position: absolute;
        top: 2px;
        right: 5px;
        font-size: 12px;
        text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.15);
      }
      p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: 13px;
        text-align: left;
        padding: 0 5px;
      }
    }
  }
}
</style>
