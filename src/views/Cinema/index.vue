<template>
  <div id="main">
    <Header title="影院"/>
    <div id="content">
      <div class="cinema_menu">
        <router-link tag="div" to="/cinema/all" class="city_switch">
          全城
          <i class="iconfont icon-jiantouxiangxia"></i>
        </router-link>
        <router-link tag="div" to="/cinema/bland" class="city_switch">
          品牌
          <i class="iconfont icon-jiantouxiangxia"></i>
        </router-link>
        <router-link tag="div" to="/cinema/special" class="city_switch">
          特色
          <i class="iconfont icon-jiantouxiangxia"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>

    <TabBar/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
// import All from "@/components/All";

export default {
  name: "Cinema",
  components: {
    Header,
    TabBar
    // All
  }
};
</script>

<style scoped>
#content .cinema_menu {
  width: 100%;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  /*  */
}
</style>
