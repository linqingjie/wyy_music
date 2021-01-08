<template>
  <ul>
    <router-link to="/" v-for="(v, k) in data" :key="v.id" tag="li">
      <div class="index">
        <span>{{ k | judge }}</span>
      </div>
      <div class="left">
        <h3>{{ v.name }}</h3>
        <p>
          {{ v.ar[0].name }}
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
    data: Array,
  },
  filters: {
    judge(value) {
      if (value + 1 <= 9) {
        return "0" + (parseInt(value) + 1);
      } else {
        return parseInt(value) + 1;
      }
    },
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
    .index {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        color: #df3436;
        font-size: 17px;
        flex: 1;
        text-align: center;
        display: block;
      }
    }
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
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        flex: 1;
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