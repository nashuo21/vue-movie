<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul>
          <li>城市名</li>
          <li>城市名</li>
          <li>城市名</li>
          <li>城市名</li>
          <li>城市名</li>
        </ul>
      </div>
      <div class="clearfix"></div>
      <div class="city_sort">
        <div>
          <h2>A</h2>
          <ul>
            <li>阿拉善盟</li>
            <li>鞍山</li>
            <li>安庆</li>
            <li>安阳</li>
          </ul>
        </div>
        <div>
          <h2>B</h2>
          <ul>
            <li>巴彦淖尔盟</li>
            <li>北京</li>
            <li>北海</li>
            <li>白云</li>
          </ul>
        </div>
        <div>
          <h2>C</h2>
          <ul>
            <li>重庆</li>
            <li>滁州</li>
            <li>长沙</li>
            <li>慈溪</li>
          </ul>
        </div>
        <div>
          <h2>D</h2>
          <ul>
            <li>大庆</li>
            <li>丹东</li>
            <li>德州</li>
            <li>慈溪</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="city_index">
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "City",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
#content .city_body {
  margin-top: 47px;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.city_body .city_list {
  flex: 1;
  overflow: auto;
  background-color: #fff5f0;
}
.city_body .city_list::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}
.city_body .city_hot {
  margin: 20px 0;
  /* line-height: 100px; */
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background-color: #f0f0f0;
  font-weight: normal;
}

.city_body .city_hot ul li {
  float: left;
  background-color: #ffffff;
  width: 23%;
  height: 33px;
  line-height: 33px;
  text-align: center;
  margin: 10px;
  /* margin-left: 3%; */
  padding: 0 4px;
  border: 1px solid #e6e6e6;
}
.city_body .city_hot ul li:hover {
  border-color: #f50;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background-color: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
  height: 30px;
}
.city_body .city_index {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px solid #f0f0f0;
  background-color: #fff;
}
</style>
