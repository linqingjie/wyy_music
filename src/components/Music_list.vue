<template>
  <ul>
    <router-link to="/" v-for="(v, k) in music" :key="v.id" tag="li">
      <div class="left">
        <h3>{{ v.name }}</h3>
        <p>
          {{ arr[k] }}
          {{ v.name }}
        </p>
      </div>
      <div class="right">
        <span></span>
      </div>
    </router-link>
  </ul>
</template>
<script>
export default {
  props: {
    music: Array,
    arr: Array,
  },
};
</script>
<style lang="less" scoped>
ul {
  li {
    text-decoration: none;
    text-align: left;
    padding: 6px 10px;
    display: flex;
    .left {
      flex: 10;
      h3 {
        font-size: 17px;
      }
      p {
        padding: 2px 0;
        font-size: 12px;
        color: #888;
      }
    }
    .right {
      flex: 2;
      span {
        position: relative;
        top: 50%;
        right: -40px;
        transform: translateY(-50%);
        display: block;
        width: 22px;
        height: 22px;
        background-image: url("../assets/wyytb.png");
        background-position: -24px 0;
        background-size: 166px 97px;
      }
    }
  }
}
</style>