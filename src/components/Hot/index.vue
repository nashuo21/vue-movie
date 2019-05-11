<template>
  <div class="movie_body">
    <ul>
      <li>
        <div class="pic_show">
          <img src="/img/movie1.jpg" alt="热播电影">
        </div>
        <div class="info_list">
          <h2>电影名称</h2>
          <p>
            打分：
            <span class="grade">9.2</span>
          </p>
          <p>主演：张三，李四，王五</p>
          <p>
            放映：
            <span>55</span> 场
          </p>
        </div>

        <div class="btn_mall">抢票</div>
      </li>
      <li>
        <div class="pic_show">
          <img src="/img/movie1.jpg" alt="热播电影">
        </div>
        <div class="info_list">
          <h2>电影名称</h2>
          <p>
            打分：
            <span class="grade">9.2</span>
          </p>
          <p>主演：张三，李四，王五</p>
          <p>
            放映：
            <span>55</span> 场
          </p>
        </div>

        <div class="btn_mall">抢票</div>
      </li>
      <li>
        <div class="pic_show">
          <img src="/img/movie1.jpg" alt="热播电影">
        </div>
        <div class="info_list">
          <h2>小丑地府：三大烛魔王（VR）0000</h2>
          <p>
            打分：
            <span class="grade">9.2</span>
          </p>
          <p>主演：张三，李四，王五，赵柳，牛气，马八</p>
          <p>
            放映：
            <span>55</span> 场
          </p>
        </div>
        <div class="btn_mall">抢票</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Hot",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
#content .movie_body {
  flex: 1;
  overflow: auto;
}
.movie_body ul {
  margin: 0 12px;
  overflow: hidden;
}
.movie_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 10px;
}
.movie_body .pic_show {
  width: 80px;
}
.movie_body .pic_show img {
  width: 100%;
  height: 110px;
}
.movie_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.movie_body .info_list h2 {
  font-size: 16px;
  line-height: 24px;
  width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list p {
  font-size: 12px;
  color: #666;
  line-height: 22px;
  width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.movie_body .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.movie_body .btn_mall,
.movie_body .btn_pre {
  width: 70px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  /* flex: 1; */
}
.movie_body .btn_pre {
  background-color: #3c9fe6;
}
</style>
