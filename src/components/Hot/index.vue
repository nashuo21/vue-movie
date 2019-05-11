<template>
  <div class="movie_body">
    <ul>
      <li v-for="item in movieList" :key="item.id">
        <div class="pic_show">
          <img :src="item.img | setWH('128.180')" :alt="item.nm">
        </div>
        <div class="info_list">
          <h2>{{item.nm}}</h2>
          <p>
            评分：
            <span class="grade">{{item.sc}}</span>
          </p>
          <p>主演：{{item.star}}</p>
          <p>
            <span>{{item.showInfo}}</span>
          </p>
          <i v-if="item.version" class="iconfont icon-Dyanjing"></i>
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
    return {
      movieList: []
    };
  },
  mounted() {
    this.axios.get("/api/movieOnInfoList?cityId=10").then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        this.movieList = res.data.data.movieList;
        console.log(this.movieList);
      }
    });
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
.icon-Dyanjing {
  color: #f03d37;
  font-size: 20px;
}
</style>
