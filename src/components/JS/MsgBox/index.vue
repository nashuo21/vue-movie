<template>
  <div id="msgBox">
    <h3>{{title}}</h3>
    <p>
      <i class="iconfont icon-dizhi"></i>
      {{content}}
    </p>
    <div>
      <div @touchstart="isCancel">{{cancel}}</div>
      <div @touchstart="isOk">{{ok}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MsgBox",
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped>
#msgBox {
  width: 200px;
  height: 140px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 1px 3px 3px 3px rgba(0, 0, 0, 0.1);
  position: absolute;
  margin: -70px 0 0 -100px;
  left: 50%;
  top: 50%;
}
#msgBox .icon-dizhi {
  color: #f03d37;
  font-size: 25px;
  line-height: 25px;
}
#msgBox h3 {
  text-align: center;
  border-bottom: 1px solid #ccc;
  font-weight: normal;
  line-height: 40px;
}
#msgBox p {
  text-align: center;
  line-height: 40px;
  margin: 10px 0;
  font-size: 18px;
}
#msgBox > div {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ccc;
}
#msgBox > div div {
  flex: 1;
  border-right: 1px solid #ccc;
  height: 100%;
  text-align: center;
  line-height: 30px;
}
#msgBox > div div:last-child {
  border: none;
}
</style>
